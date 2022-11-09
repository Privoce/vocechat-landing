import { useRouter } from "next/router";
import React from "react";
import Head from "../components/Head";
type Props = {};

const Index = (props: Props) => {
  const router = useRouter()
  const link = decodeURIComponent(router.query.magic_link as string ?? "")
  return (
    <>
      <Head />
      <main className="flex min-h-screen flex-col items-center justify-center bg-primary-50">
        <ul className="flex flex-col justify-center items-center p-4">
          <li className="mb-4 text-2xl font-bold"> Redirecting...</li>
          {link && <li className="text-gray-600 text-center w-full break-all flex flex-col gap-2">
            <span>
              {link}
            </span>
            <i className="text-gray-400 not-italic text-xs">You can also copy this url and paste it in VoceChat App</i>
          </li>}
        </ul>

      </main>
    </>
  );
};

export default Index;
