import { useContext, useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";

function Login () {

    const { user, setUser} = useContext(GlobalContext)

    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeEmail = (evento)=>{
        setEmail(evento)
    }
    const handleSubmit = async (e)=> {
        e.preventDefault();
        console.log(email, password)

        if(!email || !password || password.length < 6){
            alert("Completa los campos, la contraseña debe tener más de 6 caracteres")
            return
        }else{
            const res = await fetch("http://localhost:5001/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({email, password})
            })
            let data = await res.json()

            console.log(data)

            if(data.error){
                alert(data.error)
                return
            }else{
                alert("Sesión iniciada correctamente, bienvenido");
                let userLogged = { email: data.email, token: data.token };
                setUser(userLogged);
                localStorage.setItem("user", userLogged);
                navigate("/")
            }
        }
    }

    return (
        <>
        <NavBar />
      <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-4">

                <div className="card p-4">
                    <h3 className="text-center mb-4">Iniciar sesión</h3>

                    <form onSubmit={(e)=>{ handleSubmit(e) }}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Ingresa tu email"
                        value={email} onChange={(evento)=>{handleChangeEmail(evento.target.value)}}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" placeholder="Ingresa tu contraseña"
                        value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
                    <p className="text-center mt-3">¿No tienes una cuenta?{" "}
                        <Link to={"/register"}>
                        <span className="text-primary text-decoration-underline">
                            Registrate
                        </span>
                        </Link>
                    </p>
                    </form>
                </div>

            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Login;