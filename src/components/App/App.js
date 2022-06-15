import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./GlobalStyles.css";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import ItemListContainer from "../ItemListContainer/ItemListContainer";
import NavBar from "../Navbar/NavBar";
import GlobalAlert from "./components/GlobalAlert";
import NotFound from "../../pages/NotFound";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";
import Category from "../../pages/Category";
import { CartContextProvider } from "../../context/CartContext";
import CartContainer from "../CartContainer/CartContainer";

function App() {
  return (
    <Container className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <GlobalAlert message="Bienvenido, usuari@" />
          <InnerContainer>
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/cart" element={<CartContainer />} />
              <Route path="/product/:id" element={<ItemDetailContainer />} />
              <Route path="/products/:category" element={<Category />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </InnerContainer>
          <Footer />
        </BrowserRouter>
      </CartContextProvider>
    </Container>
  );
}

export default App;

const Container = styled.div`
  margin-top: 80px;
`;
const InnerContainer = styled.div`
  padding: 2rem 4rem 4rem 4rem;
`;
