import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { API } from "../cnx/api";
import { Product } from "../components/cards/product";
import { ProductInCart } from "../components/cards/productInCart";
import { Master } from "../components/layout/master";
import { media } from "../styles/io";
import { MediumText } from "../styles/TextStyles";

export function Home() {
  const [cart, setCart] = useState(API);
  const [isOpen, setIsOpen] = useState(false)
  const ref = useRef()
  const tooltipRef = useRef()

  function handleMenu() {
    setIsOpen(!isOpen)
  }

  function handleClickOutside(event) {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      !tooltipRef.current.contains(event.target)
    ) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const addToCart = (i) => {
    setCart((prevState) =>
      prevState.map((item, o) => {
        if (i === o) {
          return {
            ...item,
            inCart: true,
            count: item.counterVal,
          };
        }
        return item;
      })
    );
  };

  const increaseQuantity = (i) => {
    setCart((prevCart) =>
      prevCart.map((item, o) => {
        if (i === o && item.inCart) {
          if (item.count > 9) {
            return item;
          } else return { ...item, count: item.count + 1 };
        } else if (i === o) {
          if (item.counterVal > 9) {
            return item;
          } else return { ...item, counterVal: item.counterVal + 1 };
        }
        return item;
      })
    );
  };

  const decreaseQuantity = (i) => {
    setCart((prevCart) =>
      prevCart.map((item, o) => {
        if (i === o && item.inCart) {
          if (item.count > 1) {
            return { ...item, count: item.count - 1 };
          } else {
            return item;
          }
        } else if (i === o && item.counterVal > 1) {
          return { ...item, counterVal: item.counterVal - 1 };
        }
        return item;
      })
    );
  };

  const removeFromCart = (i) => {
    setCart((prevCart) =>
      prevCart.map((item, o) => {
        if (i === o) {
          return {
            ...item,
            count: 0,
            counterVal: 1,
            inCart: false,
          };
        }
        return item;
      })
    );
  };

  const cartCountTotal = cart.reduce((acc, item) => acc + item.count, 0);
  const cartPriceTotal = cart.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  const itemsCart = cart.map(
    (item, i) =>
      item.inCart && (
        <ProductInCart
          key={item.id}
          name={item.title}
          image={item.image}
          count={item.count}
          onIncreace={() => increaseQuantity(i)}
          onDecreace={() => decreaseQuantity(i)}
          onRemove={() => removeFromCart(i)}
          price={
            Number.isInteger(item.count * item.price)
              ? item.count * item.price
              : `${(item.count * item.price).toFixed(2)}`
          }
        />
      )
  );

  const cartProducts = () => (
    <List>
      {cart.map((item, i) => (
        <Product
          key={item.id}
          image={item.image}
          name={item.title}
          price={item.price}
          add={item.inCart}
          onAdd={() => addToCart(i)}
        />
      ))}
    </List>
  );

  return (
    <Master counter={cartCountTotal} openCart={handleMenu} rf={ref}>
      <PopInCart ref={tooltipRef} isOpen={isOpen}>
        <PopTop>
          <Title>List in cart</Title>
        </PopTop>
        <PopCenter>
          {cartCountTotal === 0 ? <b>Cart is empty</b> : itemsCart}
        </PopCenter>

        <PopBottom>
          <Title>
            Total price: $
            {Number.isInteger(cartPriceTotal)
              ? cartPriceTotal
              : cartPriceTotal.toFixed(2)}
          </Title>
        </PopBottom>
      </PopInCart>

      {cartProducts()}
    </Master>
  );
}

const List = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
  padding: 40px 20px;

  @media(${media.desktop}) {  
    grid-template-columns: repeat(4, 1fr);
  }
  @media(${media.laptop}) {  
    grid-template-columns: repeat(3, 1fr);
  }
  @media(${media.tablet}) {  
    grid-template-columns: repeat(2, 1fr);
  }
  @media(${media.mobile}) {  
    grid-template-columns: repeat(1, 1fr);
  }
`;

const PopInCart = styled.section`
  background: var(--BgBlur);
  border: 0.5px solid var(--Gray5);
  position: fixed;
  z-index: 10;
  right: 20px;
  top: 60px;
  width: 300px;
  height: 340px;
  border-radius: 20px;
  display: grid;
  grid-template-rows: 40px auto 40px;

  border: 0.5px solid rgba(80, 80, 80, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(40px);
  transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  transform-origin: center top;
  transform:  ${props => props.isOpen ? 'rotateX(0deg) translateY(0px)' : 'skewY(-5deg) rotate(5deg) translateY(-30px)'};
  visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
  opacity: ${props => props.isOpen ? 1 : 0};
`;
const PopTop = styled.div`
  position: sticky;
  top: 0;
  padding: 0 20px;
  display: grid;
  align-items: center;
  border-bottom: 0.5px solid var(--Gray5);
`;
const PopBottom = styled.div`
  position: sticky;
  bottom: 0;
  padding: 0 20px;
  display: grid;
  align-items: center;
  border-top: 0.5px solid var(--Gray5);
`;
const PopCenter = styled.div`
  overflow: auto;
  padding: 20px;
  display: grid;
  gap: 10px;
`;
const Title = styled(MediumText)`
  margin: 0;
`;
