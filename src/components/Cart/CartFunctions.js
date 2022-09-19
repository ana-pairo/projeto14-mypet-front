function onAdd({ product }) {
  if (JSON.parse(localStorage.getItem("Cart")) === null) {
    const newCart = [{ ...product, quantity: 1 }];
    localStorage.setItem("Cart", JSON.stringify(newCart));
    return newCart;
  }

  const cartItems = JSON.parse(localStorage.getItem("Cart"));
  const exist = cartItems.find((object) => object._id === product._id);

  if (exist) {
    const newCart = cartItems.map((item) =>
      item._id === product._id
        ? { ...exist, quantity: exist.quantity + 1 }
        : item
    );
    localStorage.setItem("Cart", JSON.stringify(newCart));

    return newCart;
  }

  const newCart = [...cartItems, { ...product, quantity: 1 }];
  localStorage.setItem("Cart", JSON.stringify(newCart));

  return newCart;
}

function onRemove({ product }) {
  const cartItems = JSON.parse(localStorage.getItem("Cart"));
  const exist = cartItems.find((object) => object._id === product._id);

  if (exist.quantity === 1) {
    const newCart = removeProduct({ product });
    localStorage.setItem("Cart", JSON.stringify(newCart));
    return newCart;
  }

  const newCart = cartItems.map((item) =>
    item._id === product._id ? { ...exist, quantity: exist.quantity - 1 } : item
  );
  localStorage.setItem("Cart", JSON.stringify(newCart));

  return newCart;
}

function removeProduct({ product }) {
  const cartItems = JSON.parse(localStorage.getItem("Cart"));

  const newCart = cartItems.filter((object) => object._id !== product._id);

  localStorage.setItem("Cart", JSON.stringify(newCart));

  return newCart;
}

export { onAdd, removeProduct, onRemove };
