import React from "react";
import styled from "styled-components";
import { BodyIntro, H2, MediumText, TextSmall2 } from "../../styles/TextStyles";
import { CountCart } from "../buttons/countCart";

export function Header(props) {
  return (
    <Wrapped>
      <Logo>SHOP FR'AR</Logo>
      <CountCart {...props}/>
    </Wrapped>
  );
}

const Wrapped = styled.header`
  background: var(--BgBlur);
  position: sticky;
  top: 0;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  border: 0.5px solid var(--Gray5);
  backdrop-filter: blur(40px);
`;

const Logo = styled(BodyIntro)`
  margin: 0;
  color: var(--Primary);
`;
