import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Item = ({ img, title, price, id }) => {
  return (
    <Container>
      <Card>
        <CardImage img={img} />
        <CardContent>
          <CardTitle>{title}</CardTitle>
          <CardPrice>$ {price}</CardPrice>
        </CardContent>
        <CardFooter>
          <Link to={`/product/${id}`}>
            <Button>Añadir al carrito</Button>
          </Link>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Item;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 500px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
  margin-bottom: 2rem;
`;
const CardImage = styled.div`
  display: flex;
  background: url(${({ img }) => img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 370px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;
const CardContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  margin-top: 0.5rem;
`;
const CardTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #194184;
  margin-right: 1rem;
`;
const CardPrice = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #000;
`;
const CardFooter = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;
`;

const Button = styled.button`
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background-color: #194184;
  cursor: pointer;
  &:hover {
    color: #194184;
    background-color: #b8e8e8;
  }
  width: 300px;
  height: 50px;
  border-radius: 5px;
`;
