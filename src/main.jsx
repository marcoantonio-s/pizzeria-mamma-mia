import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

import ProductProvider from "./contexts/ProductContext.jsx";
import { CartProvider } from "./contexts/CartContext.jsx";
import UserProvider from "./contexts/UserContext.jsx";
import GlobalProvider from "./contexts/GlobalContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalProvider>
      <UserProvider>
        <CartProvider>
          <ProductProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </ProductProvider>
        </CartProvider>
      </UserProvider>
    </GlobalProvider>
  </StrictMode>,
);
