import { useState } from "react";

function Register () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordC, setPasswordC] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault()

        if ([email, password, passwordC].includes("")) {
        alert("Todos los campos son obligatorios");
        return;
        }
        if(password.length < 6){
            alert("El password debe tener más de 6 caracteres")
            return
        }else if(password !== passwordC){
            alert("Las contraseñas deben coincidir")
            return
        }else {
            console.log("estoy enviando el form")
            alert("Registro exitoso")
            setEmail("")
            setPassword("")
            setPasswordC("")
        } 
    }

    return (
      <div className="container vh-100 d-flex justify-content-center align-items-center">
            <div className="col-12 col-md-6 col-lg-4">

                <div className="card p-4">
                    <h3 className="text-center mb-4">Registro</h3>

                    <form onSubmit={(e)=>{handleSubmit(e)}}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" placeholder="Ingresa tu email"
                        value={email} onChange={(e)=>{setEmail(e.target.value)}}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Contraseña</label>
                        <input type="password" className="form-control" placeholder="Ingresa tu contraseña"
                        value={password} onChange={(e)=>{setPassword(e.target.value)}}
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
                        <input type="password" className="form-control" placeholder="Confirma tu contraseña"
                        value={passwordC} onChange={(e)=>{setPasswordC(e.target.value)}}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">Enviar</button>
                    </form>
                </div>

            </div>
        </div>
    )
}
export default Register;