import React from "react";
import Head from "next/head";
type Props = {};

const Index = (props: Props) => {
  return (
    <Head>
      <title>VoceChat Website</title>
      <meta name="description" content="Welcome to vocechat" />
      <link rel="icon" href="/favicon.ico" />
      <meta name="theme-color" content="#527ff1" />
      <meta name="description" content="Private Hosted Chat, AI Bots, Cuztomizable Social Server" />
      <meta name="keywords" content="Private Hosted, Chat SDK, Bot, IM, Integration, API, SDK, Rust" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      {/* Twitter */}
      <meta
        name="twitter:card"
        content="Your Social Media Privately Hosted. As a top alternative to centralized chat services, Voce chat is a superlight Rust powered open-core chat app that prioritizes private hosting."
        key="twcard"
      />
      <meta name="twitter:creator" content={"privoce1"} key="twhandle" />

      {/* Open Graph */}
      <meta property='og:type' content='website' />
      <meta property="og:url" content={"https://voce.chat"} key="ogurl" />
      <meta property="og:image" content={"https://voce.chat/api/og"} key="ogimage" />
      <meta property="og:site_name" content={"VoceChat"} key="ogsitename" />
      <meta property="og:title" content={"VoceChat"} key="ogtitle" />
      <meta property="og:description" content={"Your Social Media Privately Hosted"} key="ogdesc" />
      <link
        href="/splash/iphone5_splash.png"
        media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/splash/iphone6_splash.png"
        media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/splash/iphoneplus_splash.png"
        media="(device-width: 621px) and (device-height: 1104px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/splash/iphonex_splash.png"
        media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/splash/iphonexr_splash.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/splash/iphonexsmax_splash.png"
        media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/splash/ipad_splash.png"
        media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/splash/ipadpro1_splash.png"
        media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/splash/ipadpro3_splash.png"
        media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
      <link
        href="/splash/ipadpro2_splash.png"
        media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
        rel="apple-touch-startup-image"
      />
    </Head>
  );
};

export default Index;
