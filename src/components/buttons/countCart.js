import React from "react";
import styled from "styled-components";
import { TextSmall2 } from "../../styles/TextStyles";

export const CountCart = (props) => (
  <WrapperCart onClick={props.openCart} ref={props.rf}>
    <svg
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="17" cy="19" r="2" />
      <path d="M17 17h-11v-14h-2" />
      <path d="M6 5l14 1l-1 7h-13" />
    </svg>
    <Text>CART</Text>
    <Count>
      <Text static>{props.counter}</Text>
    </Count>
  </WrapperCart>
);
const Text = styled(TextSmall2)`
  margin: 0;
  ${(p) => p.static && "color: #fff"}
`;
const WrapperCart = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 20px auto 30px;
  align-items: center;
  gap: 6px;
  height: 40px;
  padding: 6px;
  background: var(--Gray4);
  border: 0.5px solid var(--Gray5);
  border-radius: 10px;

  svg {
    width: 20px;
    height: 20px;
    color: var(--Primary);
  }
`;

const Count = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  border-radius: 6px;
  background: var(--Primary);
  width: 100%;
  height: 100%;
`;
