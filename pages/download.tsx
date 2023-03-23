/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { GetServerSideProps, NextPage } from 'next';
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next';
import { QRCodeCanvas } from 'qrcode.react'
import Head from "../components/Head";
import { getTranslationProps } from '../translations-props.config';
import useDownload from "../hooks/useDownload";

type Props = {};
type ServerProps = {
    name: string
}
const Index: NextPage = (props: Props) => {
    const { t } = useTranslation("download")
    const [info, setInfo] = useState<ServerProps | undefined>()
    const [webLink, setWebLink] = useState("")
    const router = useRouter()
    const download = useDownload()
    const link = router.query.link as string ?? ""
    useEffect(() => {
        const getServerInfo = async (link: string) => {
            try {
                const api = `${new URL(link).origin}/api/admin/system/organization`;
                const resp = await fetch(api);
                const { name } = await resp.json();
                setInfo({ name })
            } catch (error) {
                setInfo({
                    name: t("default_server_name")
                })
            }
        }
        const initWebLink = (link: string) => {
            try {
                const dLink = decodeURIComponent(link);
                const urlObj = new URL(dLink);
                const token = urlObj.searchParams.get("magic_token");
                const tmp = `${urlObj.origin}/#/register?magic_token=${token}&ctx=web`;
                setWebLink(tmp)
            } catch (error) {
                console.error("parse web link error");

            }
        }
        if (link) {
            getServerInfo(link);
            initWebLink(link)
        }
    }, [link])
    if (!info) return null;
    const app_link = `https://voce.chat/join?magic_link=${link}`;

    return (
        <>
            <Head />
            <main className="flex h-screen flex-col items-center justify-between">
                <div className="relative">
                    <img src="/img/app.grid.png" className="object-cover max-w-[unset]" alt="APP grid" />
                    <span className="absolute left-1/2 bottom-8 -translate-x-1/2 bg-transparent font-bold text-lg ">
                        {t("join")}{info?.name}!
                    </span>
                </div>

                {link && <div className="flex flex-col items-center w-4/5 text-center">
                    <p className="text-md text-gray-600 mb-4">{t("scan_tip")}</p>
                    <QRCodeCanvas value={app_link} className="rounded border border-solid border-gray-200 p-1"
                        size={200}
                        bgColor={"#fff"}
                        fgColor={"#000"}
                        level={"L"}
                        includeMargin={false} />
                    <p className="text-md text-gray-600 mt-10">{t("have_already")} <a href={app_link} className="text-blueLight-600">{t("open")}</a> </p>
                </div>}
                <div className="flex flex-col items-center mb-12">
                    {/* <h1 className="mobile:text-xl tablet:text-2xl font-bold text-center">{t("start_download")}</h1> */}
                    {webLink && <a href={webLink} className="p-2 mt-2 rounded bg-primary-500 text-white">
                        Continue with webapp
                    </a>}
                    {download ? Array.isArray(download) ? <ul className="my-10"> {download.map(d => {
                        const { link, icon } = d
                        return <li key={link}><a href={link} target="_blank" rel="noopener noreferrer" >
                            <img alt="App Download Icon" src={icon} className="max-w-[80%] h-auto m-auto mb-2" />
                        </a></li>
                    })}</ul> : <a href={download.link} target="_blank" rel="noopener noreferrer" className="my-10">
                        <img alt="App Download Icon" src={download.icon} className="max-w-[80%] h-auto m-auto" />
                    </a> : null}
                </div>
            </main>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
    props: { ...(await getTranslationProps(locale)) },
});
export default Index;
