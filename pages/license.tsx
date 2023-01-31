import React, { FormEvent, useState } from "react";
import axios from 'axios'
type Props = {};
const KEY_TOKEN = "LEN_TOKEN";
const localToken = typeof window !== "undefined" ? (window.localStorage.getItem(KEY_TOKEN) || "") : ""
const Index = (props: Props) => {
    const [token, setToken] = useState(localToken);
    const [license, setLicense] = useState("")

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
        const body = {}
        const formData = new FormData(evt.currentTarget);
        formData.forEach((val, key) => {
            body[key] = key === "user_limit" ? +val : val;
        })
        console.log(body);
        try {
            const resp = await axios.post(`https://license.voce.chat/license/gen`, body, {
                headers: {
                    "Token": token,
                    'Content-Type': "application/json"
                }
            })
            console.log("resp", resp.data);
            setLicense(JSON.stringify(resp.data))
        } catch (err) {
            setLicense(JSON.stringify({
                a: 22,
                bbb: 23424,
                c: "dfsdf"
            }, null, 2))
            console.error(err);
            alert("API Error")
        }
    }
    const inputClass = "text-lg p-2 border border-solid border-gray-100 rounded"
    return (
        <main className="w-screen h-screen bg-gray-50 flex flex-col justify-center items-center text-2xl">
            <h1 className="text-4xl font-bold mb-10">License Generator</h1>
            <form action="" onSubmit={handleSubmit} className="flex flex-col justify-start gap-2">
                {token ? <>
                    <input type="text" required className={inputClass} name="domain" placeholder="Domain" />
                    <input type="date" required className={inputClass} name="expiry_at" placeholder="Expire Date" />
                    <input type="number" required className={inputClass} name="user_limit" placeholder="User Limit" />
                </>
                    : <textarea name="token" rows={3} cols={38} className={inputClass} placeholder="Set Token First!"></textarea>}
                <button type="submit" className="p-2 rounded-full bg-success-700 text-white mt-6">{token ? `Generate` : "Set Token"}</button>
            </form>
            {license && <code className="bg-gray-100 text-xs p-3 rounded-md mt-10 whitespace-pre-wrap">
                {license}
            </code>}
        </main>
    );
};

export default Index;