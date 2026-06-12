import { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";

function Login() {
  const { login } = useContext(GlobalContext);

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (evento) => {
    setEmail(evento);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);

    if (!email || !password || password.length < 6) {
      alert(
        "Completa los campos, la contraseña debe tener más de 6 caracteres",
      );
      return;
    }

    const result = await login(email, password);

    if (result.error) {
      alert(result.error);
      return;
    }

    alert("Sesión iniciada correctamente, bienvenido");
    navigate("/");
  };

  return (
    <>
      <NavBar />

      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="col-12 col-md-6 col-lg-4">
          <div className="card p-4">
            <h3 className="text-center mb-4">Iniciar sesión</h3>

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Ingresa tu email"
                  value={email}
                  onChange={(e) => handleChangeEmail(e.target.value)}
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>

                <input
                  type="password"
                  className="form-control"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Iniciar sesión
              </button>

              <p className="text-center mt-3">
                ¿No tienes una cuenta?{" "}
                <Link to="/register">
                  <span className="text-primary text-decoration-underline">
                    Regístrate
                  </span>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Login;
