// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    secret: string
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
export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === 'POST') {
        // Process a POST request
        const { secret } = req.body;
        const name = WhiteMap[secret];
        if (!name) return res.status(401).json({ msg: "Not Authenticated" });
        return res.status(200).json({ secret });
    }
}
