import React, { FormEvent, useState } from "react";
import axios from 'axios'
import { CopyToClipboard } from "react-copy-to-clipboard";

type Props = {};
const KEY_TOKEN = "LEN_TOKEN";
const localToken = typeof window !== "undefined" ? (window.localStorage.getItem(KEY_TOKEN) || "") : ""
const Index = (props: Props) => {
    const [token, setToken] = useState(localToken);
    const [license, setLicense] = useState("")
    const [generating, setGenerating] = useState(false)
    const [copied, setCopied] = useState(false)
    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const formEle = evt.currentTarget;
        const tokenVal = formEle.token?.value;
        if (tokenVal) {
            setToken(tokenVal);
            localStorage.setItem(KEY_TOKEN, tokenVal)
            return
        } else {
            if (!formEle.checkValidity()) {
                formEle.reportValidity();
                return
            }
        }
        const body: Record<string, any> = {}
        const formData = new FormData(evt.currentTarget);
        formData.forEach((val, key) => {
            body[key] = key === "user_limit" ? +val : val;
        })
        console.log(body);
        try {
            setGenerating(true)
            const resp = await axios.post(`https://vera.nicegoodthings.com/vocechat/landing/license`, { token, data: body })
            console.log("resp", resp.data);
            setLicense(resp.data?.license ?? "")
            setGenerating(false)
        } catch (err) {
            setGenerating(false)
            setLicense("error")
            console.error(err);
            alert("API Error")
        }
    }
    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }
    const handleReset = () => {
        localStorage.removeItem(KEY_TOKEN);
        setToken("")
    }
    const inputClass = "text-lg p-2 border border-solid border-gray-100 rounded"
    return (
        <main className="w-screen h-screen bg-gray-50 flex flex-col justify-center items-center text-2xl">
            <h1 className="text-4xl font-bold mb-10 flex items-center gap-2">
                <span>License Generator</span>
                {token ? <button onClick={handleReset} className="bg-red-500 text-white px-4 py-1 rounded-full text-xs">Reset</button> : null}
            </h1>
            <form action="" onSubmit={handleSubmit} className="flex flex-col justify-start gap-2">
                {token ? <>
                    <input type="text" required className={inputClass} name="domain" placeholder="Domain" />
                    <input type="date" required className={inputClass} name="expiry_at" placeholder="Expire Date" />
                    <input type="number" required className={inputClass} name="user_limit" placeholder="User Limit" />
                </>
                    : <input name="token" required type="text" className={inputClass} placeholder="License Generate Token"></input>}
                <button type="submit" disabled={generating} className="p-2 rounded-full bg-success-700 text-white mt-6 disabled:bg-gray-400 disabled:cursor-wait">{token ? generating ? `Generating` : `Generate` : "Set Token"}</button>
            </form>
            {token && license && <>
                <code className="bg-gray-100 text-xs p-3 rounded-md mt-10 break-words max-w-3xl">
                    {license}
                </code>
                <CopyToClipboard text={license} onCopy={handleCopy}>
                    <button className="text-lg text-white bg-primary-600 px-4 py-1 mt-4 rounded-full">{copied ? "Copied" : "Copy"}</button>
                </CopyToClipboard>
            </>
            }
        </main>
    );
};

export default Index;