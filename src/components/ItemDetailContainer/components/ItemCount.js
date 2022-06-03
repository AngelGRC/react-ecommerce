import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ItemCount = (props) => {
  const { stock, id } = props;
  const [count, setCount] = React.useState(0);
  return (
    <Container>
      <CounterContainer>
        {count > 0 && <Counter onClick={() => setCount(count - 1)}>-</Counter>}
        <Value>{stock && stock === 0 ? "Sin stock" : count}</Value>
        {count < stock && (
          <Counter onClick={() => setCount(count + 1)}>+</Counter>
        )}
      </CounterContainer>
      <Button>Añadir al carrito</Button>
    </Container>
  );
};

export default ItemCount;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const CounterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 0.5rem 3rem;
`;

const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  width: 20px;
  height: 20px;
  color: #194184;
  border-radius: 5px;
  margin: 0.5rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: #194184;
    color: #fff;
  }
`;

const Value = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  margin: 0.5rem 1rem;
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;
  color: #194184;
  cursor: pointer;
  &:hover {
    color: #fff;
    background-color: #194184;
  }
  width: 100%;
  height: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;
