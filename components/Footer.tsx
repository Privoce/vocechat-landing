import React from 'react'
import styled from 'styled-components';
const Styled = styled.footer`
  background-color:#1D2939;
  padding: 48px 112px;
  display: flex;
  justify-content: space-between;
  .copyright{
    font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #98A2B3;
  }
`;
type Props = {}

const Footer = (props: Props) => {
    return (
        <footer className="bg-[#1D2939] py-[48px] px-[112px] flex justify-between">
            <span className="font-[400] text-[16px] leading-[24px] text-[#98A2B3]">
                © 2022 Privoce Inc. All rights reserved.
            </span>
            <ul className="socials">
                <li className="social">
                    github
                </li>
            </ul>
        </footer>
    )
}

export default Footer