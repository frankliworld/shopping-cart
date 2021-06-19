import React from "react";
import styled from "styled-components";
import { MediumText, TextSmall } from "../../styles/TextStyles";
import { AddCart } from "../buttons/addCart";

export function Product(props) {
  const { image, name, price, score } = props;
  return (
    <Wrapped>
      <Image src={image} title={name} />
      <Title>{name}</Title>

      <Bottom>
        <Price>${price}</Price>
        <AddCart {...props}/>
      </Bottom>
    </Wrapped>
  );
}

const Wrapped = styled.article`
  display: grid;
  grid-template-rows: 200px auto 50px;
  background: var(--White);
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

  *,
  & {
    transition: 1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }

  :hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 20px 40px rgba(0, 122, 255, 0.2),
      inset 0 0 0 0.5px rgba(255, 255, 255, 0.5);
    transform: translateY(-3px);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  border-radius: 20px;
`;
const Title = styled(TextSmall)`
  margin: 0;
  padding: 20px;
`;
const Price = styled(MediumText)`
  font-weight: bold;
  margin: 0;
`;

const Bottom = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  align-items: center;
  padding: 20px;
  padding-top: 0;
`;
