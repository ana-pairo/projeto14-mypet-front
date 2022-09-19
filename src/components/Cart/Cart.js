import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { BsTrash } from "react-icons/bs";
import { VscDiffRemoved, VscDiffAdded } from "react-icons/vsc";
import { BsArrowLeftCircle } from "react-icons/bs";
// import styled from "styled-components";

import CartContext from "../../contexts/CartContext";
import Footer from "../../common/Footer/Footer";
// import Header from "../../common/Header/Header";
import FooterButton from "../../common/Buttons/FooterButton";
import emptyCart from "../../assets/img/box.png";
import { onAdd, onRemove, removeProduct } from "./CartFunctions";
import {
  Wrapper,
  Header,
  ListContainer,
  Product,
  Image,
  DetailsContainer,
  Details,
  Title,
  Trash,
  LineSeparator,
  PriceDetails,
  Price,
  Counter,
  Quantity,
  Total,
  FinalPrice,
  EmptyCart,
} from "./Style";

export default function Cart() {
  const { setCartItems } = useContext(CartContext);
  // const [showSearchBox, setShowSearchBox] = useState(false);
  const navigate = useNavigate();
  const cartItems = JSON.parse(localStorage.getItem("Cart"));
  let itemsPrice;
  if (
    JSON.parse(localStorage.getItem("Cart")) !== null &&
    cartItems.length !== 0
  ) {
    itemsPrice = cartItems.reduce((a, c) => a + c.price * c.quantity, 0);
  }

  return (
    <Wrapper>
      {/* <Header showSearchBox={showSearchBox} setShowSearchBox={setShowSearchBox}>
        Carrinho
      </Header> */}

      <Header>
        <div>
          <BsArrowLeftCircle
            size="30px"
            color="#F1C40F"
            onClick={() => {
              navigate("/home");
            }}
          />
        </div>
        Carrinho
      </Header>

      {JSON.parse(localStorage.getItem("Cart")) === null ||
      cartItems.length === 0 ? (
        <>
          <EmptyCart>
            <img src={emptyCart} alt="emptyCartImage" />
            <div>Parece que seu carrinho está vazio</div>
          </EmptyCart>
          <Total>
            <FooterButton
              onClick={() => {
                navigate("/home");
              }}
            >
              Compre agora!
            </FooterButton>
          </Total>
        </>
      ) : (
        <>
          <ListContainer>
            {cartItems.map((product) => {
              return (
                <Product key={product._id}>
                  <Image>
                    <img src={product.imageURL} alt={product.name} />
                  </Image>
                  <DetailsContainer>
                    <Details>
                      <Title>{product.name}</Title>
                      <Trash>
                        <BsTrash
                          size="30px"
                          onClick={() => {
                            const newCart = removeProduct({ product });
                            setCartItems([...newCart]);
                          }}
                        />
                      </Trash>
                    </Details>
                    <LineSeparator />
                    <PriceDetails>
                      <Price>
                        R$
                        {parseFloat(product.price / 100)
                          .toFixed(2)
                          .replace(".", ",")}
                      </Price>
                      <Counter>
                        <VscDiffAdded
                          color="green"
                          size="25px"
                          onClick={() => {
                            const newCart = onAdd({ product });
                            setCartItems([...newCart]);
                          }}
                        />
                        <Quantity>{product.quantity}</Quantity>
                        <VscDiffRemoved
                          color="red"
                          size="25px"
                          onClick={() => {
                            const newCart = onRemove({ product });
                            setCartItems([...newCart]);
                          }}
                        />
                      </Counter>
                    </PriceDetails>
                  </DetailsContainer>
                </Product>
              );
            })}
          </ListContainer>

          <Total>
            <FinalPrice>
              Total:
              <div>
                R$
                {parseFloat(itemsPrice / 100)
                  .toFixed(2)
                  .replace(".", ",")}
              </div>
            </FinalPrice>
            <FooterButton
              onClick={() => {
                if (JSON.parse(localStorage.getItem("UserToken")) === null) {
                  navigate("/login");
                } else {
                  navigate("/checkout");
                }
              }}
            >
              Checkout
            </FooterButton>
          </Total>
        </>
      )}

      <Footer />
    </Wrapper>
  );
}
