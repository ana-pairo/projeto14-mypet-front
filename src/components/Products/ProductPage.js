import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { BsArrowLeftCircle } from "react-icons/bs";

import {
  Wrapper,
  Header,
  Container,
  NotFound,
  Image,
  Details,
  Title,
  Description,
  AddCart,
  Price,
} from "./Style";
import Footer from "../../common/Footer/Footer";
import data from "../../data";
import notfound from "../../assets/img/bro.png";
import CartContext from "../../contexts/CartContext";
import { onAdd } from "../../common/Functions/CartFunctions";

export default function ProductDescription(req) {
  const navigate = useNavigate();
  const { setCartItems } = useContext(CartContext);
  const { productId } = useParams();

  const product = data.products.find((Object) => Object._id === productId);

  return (
    <Wrapper>
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
        Produto
      </Header>
      {product ? (
        <>
          <Container>
            <Image>
              <img src={product.imageURL} alt={product.name} />
            </Image>
            <Details>
              <Title>{product.name}</Title>
              <Description>{product.description}</Description>
            </Details>
          </Container>
          <AddCart>
            <Price>
              Preço:
              <div>
                R$
                {parseFloat(product.price / 100)
                  .toFixed(2)
                  .replace(".", ",")}
              </div>
            </Price>
            <button
              onClick={() => {
                const newCart = onAdd({ product });
                setCartItems([...newCart]);
              }}
            >
              Adicionar ao carrinho
            </button>
          </AddCart>
        </>
      ) : (
        <NotFound>
          <img src={notfound} alt="notFoundImage" />
          <div>Produto não encontrado</div>
        </NotFound>
      )}

      <Footer />
    </Wrapper>
  );
}
