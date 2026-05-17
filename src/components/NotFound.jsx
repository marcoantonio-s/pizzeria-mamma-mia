import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
        <div className="text-center">
            <h1 className="display-1 fw-bold text-dark">4🍕4</h1>
            <p className="fs-5 text-secondary mb-4">La página que intentas visitar no existe.</p>
            <Link to="/" className="btn btn-dark">Volver al home</Link>
        </div>
        </div>
    </>
  )
}
