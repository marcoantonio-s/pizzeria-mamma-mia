import { useState } from "react";

function Login () {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChangeEmail = (evento)=>{
        setEmail(evento)
    }
    const handleSubmit = (e)=> {
        e.preventDefault()

        if ([email, password].includes("")) {
        alert("Todos los campos son obligatorios");
        return;
        }
        if(password.length < 6){
            alert("La contraseña debe tener al menos 6 caracteres")
            return
        }
        console.log("estoy enviando el form")
        alert("Sesión iniciada correctamente")
        setEmail("")
        setPassword("")
    }

    return (
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
                    </form>
                </div>

            </div>
        </div>
    )
}
export default Login;