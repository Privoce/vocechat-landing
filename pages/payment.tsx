import React, { FormEvent, useState } from "react";
import axios from 'axios'
import { useRouter } from "next/router";
type Props = {};
const Index = (props: Props) => {
    const router = useRouter();
    const [license, setLicense] = useState("")
    const sessionId = router.query.s as string ?? ""

    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const body: Record<string, any> = {}
        const formData = new FormData(evt.currentTarget);
        formData.forEach((val, key) => {
            body[key] = val;
        })
        body.stripe_session_id = sessionId;
        console.log(body);
        try {
            const resp = await axios.post(`https://vera.nicegoodthings.com/vocechat/license`, body)
            console.log("resp", resp.data);
            const l = resp.data?.license;
            if (l) {
                setLicense(l)
            }
        } catch (err) {
            console.error(err);
            alert("API Error")
        }
    }
    return (
        <main className="w-screen h-screen bg-gray-50 flex flex-col justify-center items-center text-2xl">
            <h1 className="text-4xl text-greenLight-700 font-bold mb-2">Payment Successfully!</h1>
            <span className="text-xs text-gray-500 mb-5">Please input your host address,e.g.<code className="bg-gray-200 p-1">https://vocechat.yourdoamin.com</code></span>
            <form action="" onSubmit={handleSubmit} className="flex flex-col justify-start gap-2">
                {sessionId ?
                    <input type="url" required className={"text-lg p-2 border border-solid border-gray-100 rounded"} name="domain" placeholder="Host" />
                    : <span>No Session ID</span>}
                <button disabled={!sessionId} type="submit" className="p-2 rounded-full bg-success-700 text-white mt-6">Generate License</button>
            </form>
            {license && <div className="mt-4 border border-solid border-gray-300 rounded-md p-2 flex flex-col gap-2">
                <span className="text-sm text-gray-700">Copy your License!</span>
                <code className="bg-gray-100 text-xs p-1 whitespace-pre-wrap max-w-2xl break-all">
                    {license}
                </code>
            </div>}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-sm text-gray-500">
                Have problem? Contact us: han@privoce.com
            </div>
        </main>
    );
};

export default Index;