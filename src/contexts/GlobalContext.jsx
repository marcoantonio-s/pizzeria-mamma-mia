import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  const [cartProducts, setCartProducts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const registerUser = async (userData) => {
    const response = await fetch("http://localhost:5001/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await response.json();

    return data;
  };

  const login = async (email, password) => {
    const response = await fetch("http://localhost:5001/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.error) {
      return {
        error: data.error,
      };
    }

    const userLogged = {
      email: data.email,
      token: data.token,
    };

    setUser(userLogged);
    localStorage.setItem("user", JSON.stringify(userLogged));

    return {
      success: true,
    };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    navigate("/login");
  };

  const getUserData = async () => {
    if (!user) {
      alert("Debes iniciar sesión");
      navigate("/login");
      return;
    }

    const response = await fetch("http://localhost:5001/api/auth/me", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    });

    const data = await response.json();

    if (data.error) {
      alert(data.error);
      logout();
      return;
    }

    return data;
  };

  const addToCart = (product) => {
    const productExists = cartProducts.find(
      (item) => item.id === product.id
    );

    if (productExists) {
      const updatedCart = cartProducts.map((item) =>
        item.id === product.id
          ? {
              ...item,
              count: item.count + 1,
            }
          : item
      );

      setCartProducts(updatedCart);
    } else {
      setCartProducts([
        ...cartProducts,
        {
          ...product,
          count: 1,
        },
      ]);
    }
  };

  const removeFromCart = (id) => {
    const updatedCart = cartProducts
      .map((item) =>
        item.id === id
          ? {
              ...item,
              count: item.count - 1,
            }
          : item
      )
      .filter((item) => item.count > 0);

    setCartProducts(updatedCart);
  };

  const clearCart = () => {
    setCartProducts([]);
  };

  const total = cartProducts.reduce(
    (acc, item) => acc + item.price * item.count,
    0
  );

  return (
    <GlobalContext.Provider
      value={{
        // Usuario
        user,
        setUser,
        registerUser,
        login,
        logout,
        getUserData,

        // Carrito
        cartProducts,
        addToCart,
        removeFromCart,
        clearCart,
        total,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;