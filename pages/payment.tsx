import React, { FormEvent, useState } from "react";
import axios from 'axios'
import CopyToClipboard from "react-copy-to-clipboard";
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
        const domain = formData.get('domain') || "";
        if (!isValidHostname(domain)) {
            alert("Invalidated Hostname!")
            return;
        }
        body.domain = domain;
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
    const handleCopy = () => {
        alert("License Copied!")
    }
    return (
        <main className="w-screen h-screen bg-gray-50 flex flex-col justify-center items-center text-2xl">
            <h1 className="text-4xl text-greenLight-700 font-bold mb-2">Payment Successfully!</h1>
            <span className="text-xs text-gray-500 mb-5">Please input your host address,e.g.<code className="bg-gray-200 p-1">vocechat.yourdoamin.com</code></span>
            <form action="" onSubmit={handleSubmit} className="flex flex-col justify-start gap-2">
                {sessionId ?
                    <input required className={"text-lg p-2 border border-solid border-gray-100 rounded"} name="domain" placeholder="Hostname" />
                    : <span>No Session ID</span>}
                <button disabled={!sessionId} type="submit" className="p-2 rounded-full bg-success-700 text-white mt-6">Generate License</button>
            </form>
            {license && <div className="mt-4 border border-solid border-gray-300 rounded-md p-2 flex flex-col items-center gap-2">
                <span className="text-sm text-gray-700">After setting up the server, go to settings-license and paste this license to update manually.</span>
                <CopyToClipboard text={license} onCopy={handleCopy}>
                    <code className="cursor-pointer bg-gray-100 text-xs p-1 whitespace-pre-wrap max-w-2xl break-all">
                        {license}
                    </code>
                </CopyToClipboard>
                <span className="text-xs text-gray-500">Click to copy!👆</span>
            </div>}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-sm text-gray-500">
                Have problem? Contact us: han@privoce.com
            </div>
        </main>
    );
};

export default Index;

export const isValidHostname = (value: any) => {
    if (typeof value !== 'string') return false

    const validHostnameChars = /^[a-zA-Z0-9-.]{1,253}\.?$/g
    if (!validHostnameChars.test(value)) {
        return false
    }

    if (value.endsWith('.')) {
        value = value.slice(0, value.length - 1)
    }

    if (value.length > 253) {
        return false
    }

    const labels = value.split('.')

    const isValid = labels.every(function (label: string) {
        const validLabelChars = /^([a-zA-Z0-9-]+)$/g

        const validLabel = (
            validLabelChars.test(label) &&
            label.length < 64 &&
            !label.startsWith('-') &&
            !label.endsWith('-')
        )

        return validLabel
    })

    return isValid
}