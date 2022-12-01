/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'

import Head from "../components/Head";
type Download = { link: string, icon: string }
type Props = {};
const Index = (props: Props) => {
    const router = useRouter()
    const [download, setDownload] = useState<Download | Download[] | null>(null);
    useEffect(() => {
        const isAndroid = typeof window !== 'undefined' ? navigator.userAgent.match(/Android/i) : false;
        setDownload(isAndroid ? ([{
            link: "https://play.google.com/store/apps/details?id=com.privoce.vocechatclient",
            icon: "/img/icon.app.google.play.png"
        }, {
            link: "https://s.voce.chat/vocechat.android.apk",
            icon: "/img/icon.app.apk.png"
        }]) : ({
            link: "https://apps.apple.com/app/vocechat/id1631779678",
            icon: "/img/icon.app.ios.png"
        }))

    }, []);
    const link = router.query.link as string ?? ""
    return (
        <>
            <Head />
            <main className="flex h-screen flex-col items-center justify-around">
                <div className="flex relative">
                    <img src="/img/app.grid.png" className="object-cover max-w-[unset]" alt="APP grid" />
                    <span className="absolute left-1/2 bottom-0 -translate-x-1/2 bg-white font-bold text-lg leading-[1.1] bg-gradient-to-b from-[#f0f0f0] via-white to-white">VoceChat</span>
                </div>
                <div className="flex flex-col items-center w-72">
                    <h1 className="mt-6 text-2xl font-bold text-center">Start by downloading VoceChat mobile app</h1>
                    {download ? Array.isArray(download) ? <ul className="mt-14 mb-12"> {download.map(d => {
                        const { link, icon } = d
                        return <li key={link}><a href={link} target="_blank" rel="noopener noreferrer" >
                            <img alt="App Download Icon" src={icon} className="max-w-[80%] h-auto m-auto mb-4" />
                        </a></li>
                    })}</ul> : <a href={download.link} target="_blank" rel="noopener noreferrer" className="mt-14 mb-16">
                        <img alt="App Download Icon" src={download.icon} className="max-w-[80%] h-auto m-auto" />
                    </a> : null}
                    {link && <p className="text-md text-gray-600 pb-2">Have the app already? <a href={`https://voce.chat/join?magic_link=${link}`} className="text-blueLight-600">Open VoceChat</a> </p>}
                </div>
            </main>
        </>
    );
};

export default Index;
