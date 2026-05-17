import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'

export default function Profile() {
  return (
    <>
    <NavBar/>
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
            <div className="text-center">
                <h2 className="display-6 fw-bold text-dark mb-4">Hola, usuario@correo.com</h2>
                <Link to="/" className="btn btn-dark">Cerrar sesión</Link>
            </div>
        </div>
    </>
  )
}
