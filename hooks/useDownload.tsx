import { useEffect, useState } from "react";
type Download = { link: string, icon: string }

const useDownload = () => {
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
    return download
}
export default useDownload;