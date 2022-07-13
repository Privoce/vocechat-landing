import React from 'react'
type Props = {}

const Deploy = (props: Props) => {
  return (
    <section className="flex flex-col items-center py-[96px] bg-[#1D2939] text-[#fff]">
      <h3 className="font-[600] text-[36px] leading-[44px] tracking-[-0.02em] text-[#FCFCFD]">Deploy our free-trial version through docker:</h3>
      <p className="font-[400] leading-[30px] text-center text-[#D0D5DD] text-[20px]">For other ways of installation, check out our documentation.</p>
      <div className="relative my-[64px]">
        <code className="min-w-[300px] bg-[#050702] px-[40px] py-[20px] rounded-[10px]">
          curl -sf https://sh.rustchat.com/install.sh a+x install.sh && ./install.sh
        </code>
        <button className="absolute top-[-25px] right-[5px] px-[5px] py-[6px] rounded-[5px] cursor-pointer opacity-40 hover:opacity-100">Copy</button>
      </div>
      <span className="my-[64px] text-[#FCFCFD] leading-[24px] font-[400] text-[16px]">After starting the server, visit http://localhost:3000/ to use the app.</span>
      <div className="flex flex-col items-center">
        <h4 className="font-[600] text-[36px] leading-[44px] text-[#FCFCFD]">Still having a problem?</h4>
        <span className="mt-[12px] mb-[64px]">
          Check out <a className='text-[#22CCEE]' href="https://www.youtube.com/watch?v=RzmwpFWY-kI" target="_blank" rel="noopener noreferrer">video instruction</a> . Or book a consulting meeting with us:
        </span>
        <a href="#" className="bg-[#22CCEE] rounded-[8px] px-[20px] py-[12px] font-[500] leading-[24px] shadow-[0px_1px_2px_rgba(16,24,40,0.05)]">Book a Meeting</a>
      </div>
    </section>
  )
}

export default Deploy