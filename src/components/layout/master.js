import React from "react";
import styled from "styled-components";
import { Header } from "./header";

export function Master(props) {
  return (
    <Wrapped>
      <Header {...props} />
      {props.children}
    </Wrapped>
  );
}

const Wrapped = styled.main`
  background: var(--Bg);
`;
