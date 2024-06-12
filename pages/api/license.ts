// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'
type Data = {
  license: string
} | {
  msg: string
}
const WhiteMap: Record<string, string> = {};
const envString = process.env.VOCE_LICENSE_PASSWORD ?? "";
envString.split("|").forEach((item) => {
  if (item.includes(":")) {
    const [secret, name] = item.split(":");
    WhiteMap[secret] = name;
  }
});

const generateLicense = async (md: any, token = null) => {
  const resp = await axios.post("https://license.ipter.org/license/gen", md, {
    headers: {
      "Content-Type": "application/json",
      Token: token ?? process.env.VOCE_LICENSE_TOKEN,
    },
  });
  console.log("vocechat license", resp.data);
  return resp.data;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { secret, data: reqData } = req.body;
    if (!WhiteMap[secret]) return res.status(401).send({ msg: "Not Authenticated" });
    if (reqData) {
      try {
        const { code, data } = await generateLicense(reqData);
        if (code == 0) {
          // 生成成功
          // 通过 bot 给 vocechat 发消息
          const botData = [
            "## from",
            `**${WhiteMap[secret]}**`,
            "## data",
            "```json",
            JSON.stringify(reqData),
            "```",
            "## license",
            `**${data.license}**`,
          ].join("\n");
          axios
            .post("https://dev.voce.chat/api/bot/send_to_group/166", botData, {
              headers: {
                "content-type": "text/markdown",
                "x-api-key": process.env.VOCE_LICENSE_BOT,
              },
            })
            .then((resp) => {
              console.log("发送成功，消息 ID：", resp.data);
            })
            .catch((err) => {
              console.error("发送失败：", JSON.stringify(err, null, 2), data);
            });
          //  return license content
          return res.status(200).json({ license: data.license });
        }
        return res.status(400).send({ msg: "bad request!" });
      } catch (error: any) {
        return res.status(500).send({ msg: "license gen failed!" });
      }
    }
    return res.status(400).send({ msg: "bad request!" });
  }
}
