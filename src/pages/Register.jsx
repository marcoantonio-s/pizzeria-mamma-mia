import { useState, useContext } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";

function Register() {

    const { registerUser } = useContext(GlobalContext);

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [password2, setPassword2] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(email, pass, password2);

        if (!email || !pass || !password2 || pass !== password2 || pass.length < 6) {
            alert("Los datos no son correctos, la contraseña debe tener al menos 6 caracteres");
            return;
        }

        const user = {
            email,
            password: pass
        };

        const data = await registerUser(user);

        console.log(data);

        if (data.error) {
            alert(data.error);
            return;
        }

        alert("Registro exitoso");

        setEmail("");
        setPass("");
        setPassword2("");

        navigate("/login");
    };

    return (
        <>
            <NavBar />

            <div className="container vh-100 d-flex justify-content-center align-items-center">
                <div className="col-12 col-md-6 col-lg-4">

                    <div className="card p-4">
                        <h3 className="text-center mb-4">Registro</h3>

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
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
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
                                    value={pass}
                                    onChange={(e) => setPass(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="confirmPassword" className="form-label">
                                    Confirmar Contraseña
                                </label>

                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Confirma tu contraseña"
                                    value={password2}
                                    onChange={(e) => setPassword2(e.target.value)}
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-primary w-100"
                            >
                                Enviar
                            </button>

                        </form>
                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
}

export default Register;