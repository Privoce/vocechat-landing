import React from 'react'
import styled from 'styled-components';
import Image from 'next/future/image'
const Styled = styled.section`
  table{
    thead{
      font-weight: 700;
font-size: 16px;
line-height: 24px;
color: #101828;
border-bottom: 1px solid #EAECF0;

th{
  padding: 22px 24px;
  padding-bottom: 16px;
}
    }
    tbody{
      margin-top: 5px;
      tr{
        &:nth-child(odd){
          background-color: #F9FAFB;
        }
        td{
          width: 240px;
          padding: 22px 24px;
          img{
    width: 24px;
    height: 24px;
  }
        }
      }
    }
  }
`;
type Props = {}

function Compare({ }: Props) {
  return (
    <section className="flex flex-col items-center py-[96px]">
      <h2 className="font-[600] text-[48px] leading-[60px] text-[#101828] mb-[96px]">Compare our tool with others</h2>
      <table>
        <thead className="border-solid border-b border-[#EAECF0]">
          <tr>
            <th align='left'>Products</th>
            <th align='center'>Security & Privacy</th>
            <th align='center'>Open Source</th>
            <th align='center'>Mobile App</th>
            <th align='center'>Private Hosting</th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-[#F9FAFB]'>
            <td align='left'>VoceChat</td>
            <td align='center'>
              <Image className='w-[24px] h-[24px]' src={'/img/check.png'} alt="check icon"></Image>
            </td>
            <td align='center'>
              <Image className='w-[24px] h-[24px]' src={'/img/check.png'} alt="check icon"></Image>
            </td>
            <td align='center'>
              <Image className='w-[24px] h-[24px]' src={'/img/check.png'} alt="check icon"></Image>
            </td>
            <td align='center'>
              <Image className='w-[24px] h-[24px]' src={'/img/check.png'} alt="check icon"></Image>
            </td>
          </tr>
          <tr>
            <td align='left'>Maxtrix</td>
            <td align='center'>
              <Image className='w-[24px] h-[24px]' src={'/img/check.png'} alt="check icon"></Image>
            </td>
            <td align='center'>
              <Image className='w-[24px] h-[24px]' src={'/img/check.png'} alt="check icon"></Image>
            </td>
            <td align='center'>
              <Image className='w-[24px] h-[24px]' src={'/img/check.png'} alt="check icon"></Image>
            </td>
            <td align='center'>
              <Image className='w-[24px] h-[24px]' src={'/img/check.png'} alt="check icon"></Image>
            </td>
          </tr>
          <tr className='bg-[#F9FAFB]'>
            <td align='left'>XMPP</td>
            <td align='center'>
              <Image className='w-[24px] h-[24px]' src={'/img/check.png'} alt="check icon"></Image>
            </td>
            <td align='center'>
              <Image className='w-[24px] h-[24px]' src={'/img/check.png'} alt="check icon"></Image>
            </td>
            <td align='center'>
              <Image className='w-[24px] h-[24px]' src={'/img/check.png'} alt="check icon"></Image>
            </td>
            <td align='center'>
              <Image className='w-[24px] h-[24px]' src={'/img/check.png'} alt="check icon"></Image>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default Compare