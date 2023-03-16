import React, { FormEvent, useState } from "react";
import axios, { AxiosError } from 'axios'
import { CopyToClipboard } from "react-copy-to-clipboard";

type Props = {};
const KEY_NAME = "LEN_SECRET_NAME";
const KEY_SECRET = "LEN_SECRET";
const localName = typeof window !== "undefined" ? (window.localStorage.getItem(KEY_NAME) || "") : ""
const localSecret = typeof window !== "undefined" ? (window.localStorage.getItem(KEY_SECRET) || "") : ""
const prefix = process.env.NODE_ENV == "development" ? `http://localhost:4000` : `https://vera.nicegoodthings.com`;
const Index = (props: Props) => {
    const [name, setName] = useState(localName)
    const [secret, setSecret] = useState(localSecret);
    const [license, setLicense] = useState("")
    const [pairing, setPairing] = useState(false)
    const [generating, setGenerating] = useState(false)
    const [copied, setCopied] = useState(false)
    const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        const formEle = evt.currentTarget;
        const secretVal = formEle.secret?.value;
        if (secretVal) {
            try {
                setPairing(true)
                const resp = await axios.post(`${prefix}/vocechat/landing/license/pair`, { secret: secretVal })
                console.log("resp", resp.data);
                const name = resp.data?.name ?? "";
                setPairing(false)
                setSecret(secretVal);
                setName(name)
                localStorage.setItem(KEY_SECRET, secretVal)
                localStorage.setItem(KEY_NAME, name)
                return
            } catch (err) {
                setPairing(false)
                if ((err as AxiosError).response?.status == 401) {
                    alert("Invalid Secret!")
                } else {
                    alert("API Error!")
                }
                return
            }
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
            setLicense("")
            setGenerating(true)
            const resp = await axios.post(`${prefix}/vocechat/landing/license`, { secret, data: body })
            console.log("resp", resp.data);
            setLicense(resp.data?.license ?? "")
            setGenerating(false)
        } catch (err) {
            setGenerating(false)
            if ((err as AxiosError).response?.status == 401) {
                alert("Invalid Secret!")
            } else {
                alert("API Error!")
            }
            // console.error("error", err.response.status);
        }
    }
    const handleCopy = () => {
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 2000);
    }
    const handleReset = () => {
        localStorage.removeItem(KEY_SECRET);
        localStorage.removeItem(KEY_NAME);
        setSecret("")
        setName("")
    }
    const inputClass = "text-lg p-2 border border-solid border-gray-100 rounded"
    return (
        <main className="w-screen h-screen bg-gray-50 flex flex-col justify-center items-center text-2xl">
            <h1 className="text-xl md:text-4xl font-bold mb-2 md:mb-10 flex flex-col items-center gap-2">
                <span className="relative">VoceChat License Generator
                    {name && <em className="absolute right-0 -top-4 rotate-6 text-primary-500 text-xs  not-italic">{name}</em>}
                </span>
                {secret ? <button onClick={handleReset} className="bg-red-500 text-white px-4 py-1 rounded-full text-xs">Reset Secret</button> : null}
            </h1>
            <form action="" onSubmit={handleSubmit} className="flex flex-col justify-start gap-2">
                {secret ? <>
                    <input type="text" required className={inputClass} name="domain" placeholder="Domain" />
                    <input type="date" required className={inputClass} name="expiry_at" placeholder="Expire Date" />
                    <input type="number" required className={inputClass} name="user_limit" placeholder="User Limit" />
                </>
                    : <input name="secret" required type="text" className={inputClass} placeholder="Input Secret Please"></input>}
                <button type="submit" disabled={generating || pairing} className="p-1 md:p-2 rounded-full bg-success-700 text-white mt-2 md:mt-6 disabled:bg-gray-400 disabled:cursor-wait">
                    {secret ? (generating ? `Generating` : `Generate`) : (pairing ? "Pairing" : "Set Secret")}
                </button>
            </form>
            {secret && license && <>
                <code className="bg-gray-100 text-xs p-3 rounded-md mt-2 md:mt-10 break-words w-full md:max-w-3xl max-h-32 md:max-h-64 overflow-y-scroll">
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