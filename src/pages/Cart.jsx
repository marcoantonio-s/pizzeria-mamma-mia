import React, { useContext } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { GlobalContext } from "../contexts/GlobalContext";
import { CartContext } from "../contexts/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { user } = useContext(GlobalContext);

  const { cartProducts, addToCart, removeFromCart, clearCart, total } =
    useContext(CartContext);

  const handleCheckout = async () => {
    try {
      const response = await fetch("http://localhost:5001/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          cart: cartProducts,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Error al procesar la compra");
      }

      alert("¡Compra realizada con éxito!");

      clearCart();
    } catch (error) {
      console.error("Error en el checkout:", error);
      alert(error.message);
    }
  };

  return (
    <>
      <NavBar />

      <div className="container flex-grow-1">
        <h1 className="fw-bold mb-5">Detalles del pedido</h1>

        <div className="row">
          <div className="col-md-8 mb-5">
            <ul className="px-0">
              {cartProducts.length > 0 ? (
                cartProducts.map((p) => (
                  <li
                    key={p.id}
                    className="border rounded mt-3 p-2"
                    style={{ listStyle: "none" }}
                  >
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="d-flex align-items-center">
                        <img
                          className="border rounded m-2"
                          width={100}
                          src={p.img}
                          alt={p.name}
                        />

                        <div>
                          <h5 className="text-capitalize mb-1">{p.name}</h5>

                          <p className="mb-0 fw-bold">
                            ${p.price.toLocaleString()}
                          </p>
                        </div>
                      </div>

                      <div className="d-flex align-items-center">
                        <button
                          className="btn btn-dark btn-sm"
                          onClick={() => removeFromCart(p.id)}
                        >
                          -
                        </button>

                        <span className="mx-3 fw-bold">{p.count}</span>

                        <button
                          className="btn btn-dark btn-sm"
                          onClick={() => addToCart(p.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </li>
                ))
              ) : (
                <h4 className="text-center mt-5">🛒 Tu carrito está vacío</h4>
              )}
            </ul>
          </div>

          <div className="col-md-4 mb-5">
            <div className="border rounded p-4">
              <h3 className="fw-bold">Total: ${total.toLocaleString()}</h3>

              <button
                onClick={handleCheckout}
                className="btn btn-dark w-100 mt-3"
                disabled={!user || cartProducts.length === 0}
              >
                Finalizar Compra
              </button>

              {!user && (
                <p className="text-danger mt-2 mb-0 text-center">
                  Debes <Link as={Link} to="/login">iniciar sesión</Link> para comprar
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
