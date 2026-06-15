/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        fontSize: 60,
        color: "black",
        background: "#ecfdff",
        width: "100%",
        height: "100%",
        padding: "40px 0",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <img
        alt="VoceChat Logo"
        width="256"
        height="256"
        src={`https://voce.chat/android-chrome-192x192.png`}
        style={{
          borderRadius: "50%"
        }}
      />
      <h1 style={{ fontFamily: "-apple-system", fontWeight: "bold", fontSize: 72 }}>Voce Chat</h1>
      <span style={{ fontSize: 32, color: "#527ff1", fontWeight: 600 }}>
        runs locally, chat anywhere
      </span>
    </div>,
    {
      width: 1200,
      height: 630
    }
  );
}
