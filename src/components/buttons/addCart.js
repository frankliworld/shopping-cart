import React from "react";
import styled from "styled-components";
import { MediumText } from "../../styles/TextStyles";

export function AddCart(props) {
  return (
    <Wrapped add={props.add} onClick={props.onAdd}>
      <Title>{props.add ? "Item add!" : "Add"}</Title>
    </Wrapped>
  );
}

const Wrapped = styled.button`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  max-height: 50px;
  background: ${(props) => (props.add ? "var(--Secondary)" : "var(--Primary)")};
  color: #fff;
  border-color: transparent;
  border-radius: 10px;
  *,
  & {
    transition: 1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }

  :hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 20px 40px rgba(0, 122, 255, 0.2),
      inset 0 0 0 0.5px rgba(255, 255, 255, 0.5);
  }
`;
const Title = styled(MediumText)`
  margin: 0;
`;
