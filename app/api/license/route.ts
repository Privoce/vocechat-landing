import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

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
      Token: token ?? process.env.VOCE_LICENSE_TOKEN
    }
  });
  console.log("vocechat license", resp.data);
  return resp.data;
};

export async function POST(req: NextRequest) {
  const { secret, data: reqData } = await req.json();
  if (!WhiteMap[secret]) return NextResponse.json({ msg: "Not Authenticated" }, { status: 401 });
  if (reqData) {
    try {
      const { code, data } = await generateLicense(reqData);
      if (code == 0) {
        // 生成成功，通过 bot 给 vocechat 发消息
        const botData = [
          "## from",
          `**${WhiteMap[secret]}**`,
          "## data",
          "```json",
          JSON.stringify(reqData),
          "```",
          "## license",
          `**${data.license}**`
        ].join("\n");
        axios
          .post("https://dev.voce.chat/api/bot/send_to_group/166", botData, {
            headers: {
              "content-type": "text/markdown",
              "x-api-key": process.env.VOCE_LICENSE_BOT
            }
          })
          .then((resp) => {
            console.log("发送成功，消息 ID：", resp.data);
          })
          .catch((err) => {
            console.error("发送失败：", JSON.stringify(err, null, 2), data);
          });
        return NextResponse.json({ license: data.license });
      }
      return NextResponse.json({ msg: "bad request!" }, { status: 400 });
    } catch (error: any) {
      return NextResponse.json({ msg: "license gen failed!" }, { status: 500 });
    }
  }
  return NextResponse.json({ msg: "bad request!" }, { status: 400 });
}
