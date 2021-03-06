import styled from "styled-components";
import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const CartWidget = ({ onClick }) => {
  const { productInCart, cartItemsQuantity } = useContext(CartContext);
  return (
    <>
      <Icon onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </Icon>
      {productInCart.length > 0 && <Quantity>{cartItemsQuantity()}</Quantity>}
    </>
  );
};

export default CartWidget;

const Icon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2rem;
  font-size: 1.5rem;
  font-weight: bold;
  color: #194184;
  text-transform: uppercase;
  cursor: pointer;
`;

const Quantity = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  text-transform: uppercase;
  background-color: red;
  border-radius: 50%;
  width: 1.1rem;
  height: 1.1rem;
`;
