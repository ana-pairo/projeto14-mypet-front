import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import {
  Wrapper,
  Container,
  NotFound,
  Image,
  Details,
  Title,
  Description,
  AddCart,
  Price,
} from "./Style";
import { onAdd } from "../Cart/CartFunctions";
import { getProducts } from "./GetProducts";
import Footer from "../../common/Footer/Footer";
import Header from "../../common/Header/Header";
import notfound from "../../assets/img/bro.png";
import CartContext from "../../contexts/CartContext";

export default function ProductDescription() {
  const { setCartItems } = useContext(CartContext);
  const { productId } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts()
      .then((res) => {
        const productList = [...res.data];
        const exist = productList.find((object) => object.name === productId);

        if (exist) {
          setProduct({ ...exist });
        } else {
          setProduct(null);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <Header>Carrinho</Header>
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
