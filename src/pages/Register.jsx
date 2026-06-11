import { useState } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

function Register () {

    const [email,  setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [password2, setPassword2] = useState("")
    const navigate = useNavigate()

    const handleSubmit= async (e)=> {
        e.preventDefault()
        console.log(email, pass, password2)

        if(!email || !pass || !password2 || pass != password2 || pass.length< 6){
            alert("Los datos no son correctos, la contraseña debe tener al menos 6 caracteres")
            return
        } else {
            let user = { email, password: pass }
            let datos = JSON.stringify(user)
            console.log(datos);

            const res = await fetch("http://localhost:5001/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: datos,
            });

            let data = await res.json()
            console.log(data)

            if(data.error){
                alert(data.error)
                return
            }else {
                alert("Registro exitoso")
                navigate("/login")
            }
        }
    }

    return (
        <>
        <NavBar/>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-4">

                <div className="card p-4">
                    <h3 className="text-center mb-4">Registro</h3>

                    <form onSubmit={(e)=>{handleSubmit(e)}}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Ingresa tu email"
                        value={email} onChange={(e)=>{setEmail(e.target.value)}} required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" placeholder="Ingresa tu contraseña"
                        value={pass} onChange={(e)=>{setPass(e.target.value)}} required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
                        <input type="password" className="form-control" placeholder="Confirma tu contraseña"
                        value={password2} onChange={(e)=>{setPassword2(e.target.value)}} required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Enviar</button>
                    </form>
                </div>

            </div>
        </div>
        <Footer/>
        </>
    )
}
export default Register;




    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [passwordC, setPasswordC] = useState("");

    // const handleSubmit = (e)=>{
    //     e.preventDefault()

    //     if ([email, password, passwordC].includes("")) {
    //     alert("Todos los campos son obligatorios");
    //     return;
    //     }
    //     if(password.length < 6){
    //         alert("El password debe tener más de 6 caracteres")
    //         return
    //     }else if(password !== passwordC){
    //         alert("Las contraseñas deben coincidir")
    //         return
    //     }else {
    //         console.log("estoy enviando el form")
    //         alert("Registro exitoso")
    //         setEmail("")
    //         setPassword("")
    //         setPasswordC("")
    //     } 
    // }