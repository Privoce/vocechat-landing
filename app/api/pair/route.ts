import { NextRequest, NextResponse } from "next/server";

const WhiteMap: Record<string, string> = {};
const envString = process.env.VOCE_LICENSE_PASSWORD ?? "";
envString.split("|").forEach((item) => {
  if (item.includes(":")) {
    const [secret, name] = item.split(":");
    WhiteMap[secret] = name;
  }
});

export async function POST(req: NextRequest) {
  const { secret } = await req.json();
  const name = WhiteMap[secret];
  if (!name) return NextResponse.json({ msg: "Not Authenticated" }, { status: 401 });
  return NextResponse.json({ secret });
}
