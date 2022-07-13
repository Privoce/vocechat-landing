import React from 'react'
import Image from 'next/future/image'
type Props = {}

const Features = (props: Props) => {
  return (
    <section className="flex flex-col items-center pt-[10px] pb-[130px]">
      <h3 className="font-[600] text-[36px] leading-[44px] tracking-[-0.02em] text-[#101828]">Cutting-edge features for advanced analytics</h3>
      <p className="w-[768px] text-center text-[20px] text-[#676f80] leading-[30px] mt-[20px] mb-[64px] ">Modern features, open-source SDK, iterate based on users feedback. Trusted by over 4,000 customers.</p>
      <div className="relative">
        <div className="w-[532px] h-[480px] rounded-[40%_60%_70%_30%_/_40%_50%_60%_50%] bg-[#CFF9FE] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] animate-morph"></div>
        <Image className="w-[290px] translate-x-0 translate-y-0" src={'/img/mobile.png'} alt="Mobile Demo Picture" />
      </div>
    </section>
  )
}

export default Features