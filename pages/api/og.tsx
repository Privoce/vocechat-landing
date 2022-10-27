/* eslint-disable @next/next/no-img-element */
/* eslint-disable import/no-anonymous-default-export */
import { ImageResponse } from '@vercel/og';

export const config = {
    runtime: 'experimental-edge',
};
export default function () {
    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    fontSize: 60,
                    color: 'black',
                    background: '#ecfdff',
                    width: '100%',
                    height: '100%',
                    padding: "40px 0",
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <img
                    alt="VoceChat Logo"
                    width="256"
                    height="256"
                    src={`https://voce.chat/android-chrome-192x192.png`}
                    style={{
                        borderRadius: "50%",
                    }}
                />
                <h1 style={{ fontFamily: "-apple-system", fontWeight: "bold", fontSize: 90 }}>voce.chat</h1>
                <span style={{ fontSize: 25, color: "#666" }}>Your Private Social Space</span>
            </div>
        ),
        {
            width: 1200,
            height: 630,
        },
    );
}
