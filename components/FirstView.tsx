import React from 'react'
import Image from 'next/future/image'
type Props = {}

function FirstView({ }: Props) {
  return (
    <section className="flex h-full flex-col items-center bg-[#ECFDFF] pt-[96px] pb-[40px] bg-[url('/img/bg.first.view.png')] bg-bottom bg-no-repeat">
      <h2 className="font-[600] text-[60px] leading-[72px] text-[#164C63] tracking-[-0.02em]">Your Social Media Privately Hosted</h2>
      <p className="text-[20px] w-[768px] font-[400] leading-[30px] text-center text-[#0E7090] mt-[24px] mb-[64px]">As a top alternative to centralized chat services, Voce chat is a superlight Rust powered open-core chat app that prioritizes private hosting.</p>
      <Image className="w-[800px]" src={'/img/demo.png'} alt="demo picture" />
    </section>
  )
}

export default FirstView