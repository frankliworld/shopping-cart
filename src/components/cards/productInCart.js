import React from "react";
import styled from "styled-components";
import { MediumText, TextSmall } from "../../styles/TextStyles";

export function ProductInCart(props) {
  const { image, name, price, count, onDecreace, onIncreace, onRemove } = props;
  return (
    <Wrapped>
      <Image src={image} title={name} />
      <Info>
        <Title>{name}</Title>
        <Price>Items Subtotal ${price}</Price>
        <Bottom>
          <Touch onClick={onDecreace}>-</Touch>
          <Count>{count}</Count>
          <Touch onClick={onIncreace}>+</Touch>
          <Touch onClick={onRemove}>Remove</Touch>
        </Bottom>
      </Info>
    </Wrapped>
  );
}

const Wrapped = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 80px 1fr;
  align-items: center;
  background: var(--White);
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

  *,
  & {
    transition: 1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }

  :hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  max-height: 100px;
  object-fit: contain;
  border-radius: 10px;
`;
const Title = styled(TextSmall)`
  margin: 0;
`;
const Price = styled(TextSmall)`
  font-weight: bold;
  margin: 0;
`;
const Count = styled(MediumText)`
  margin: 0;
`;
const Info = styled.div`
  display: grid;
  gap: 10px;
  padding: 10px;
`;
const Bottom = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 30px auto 30px 1fr;
  gap: 5px;
`;
const Touch = styled.button`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  max-height: 30px;
  background: ${(props) => (props.add ? "var(--Secondary)" : "var(--Primary)")};
  color: #fff;
  border-color: transparent;
  border-radius: 6px;
  font-size: 14px;
  *,
  & {
    transition: 1s cubic-bezier(0.17, 0.67, 0.83, 0.67);
  }

  :hover {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 20px 40px rgba(0, 122, 255, 0.2),
      inset 0 0 0 0.5px rgba(255, 255, 255, 0.5);
  }
`;
