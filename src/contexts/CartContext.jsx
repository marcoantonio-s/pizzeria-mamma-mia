import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    const getProducts = async () => {

      try {

        const res = await fetch("http://localhost:5001/api/pizzas");
        const data = await res.json();

        const productsWithCount = data.map(product => ({
          ...product,
          count: 0
        }));

        setProducts(productsWithCount);

      } catch (error) {
        console.log(error);
      }
    };

    getProducts();

  }, []);

  const addToCart = (id) => {

    const updatedProducts = products.map(product => {

      if (product.id === id) {
        return {
          ...product,
          count: product.count + 1
        };
      }

      return product;
    });

    setProducts(updatedProducts);
  };

  const removeFromCart = (id) => {

    const updatedProducts = products.map(product => {

      if (product.id === id && product.count > 0) {
        return {
          ...product,
          count: product.count - 1
        };
      }

      return product;
    });

    setProducts(updatedProducts);
  };

  const cartProducts = products.filter(product => product.count > 0);

  const total = cartProducts.reduce((acc, product) => {
    return acc + (product.price * product.count);
  }, 0);

  return (
    <CartContext.Provider
      value={{
        products,
        cartProducts,
        addToCart,
        removeFromCart,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};