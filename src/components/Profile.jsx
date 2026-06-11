import React, { useContext, useEffect, useState } from 'react'
import NavBar from './NavBar'
import { Link, useNavigate } from 'react-router-dom'
import { GlobalContext } from '../contexts/GlobalContext'

export default function Profile() {

  const { user } = useContext(GlobalContext)

  const navigate = useNavigate()

  const [userProfile, setUserProfile] = useState(null)

  useEffect(()=>{
    const getUserData = async()=>{

      if(!user){
        alert("Debes iniciar sesión")
        navigate("/login")
        return
      }

      
      const res = await fetch("http://localhost:5001/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + user.token
        }
      })
       let data = await res.json()
        if(data.error){
          alert(data.error)
          localStorage.removeItem("user")
          setUser(null)
          navigate("/login")
          return
        }
        console.log("NUESTRO FETCH A /api/auth/me me está devolviendo: ", data)
        setUserProfile(data)
      }


    getUserData()

  },[])


  return (
    <>
    <NavBar/>
        <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
          {userProfile ? (
            <>
              <div className="text-center">
                  <h2 className="display-6 fw-bold text-dark mb-4">Hola, {userProfile.email}</h2>
                  <p>Info usuario: {userProfile.id}</p>
                  <Link to="/" className="btn btn-dark">Cerrar sesión</Link>
              </div>
            </>
             ) : (
              <p className='container-fluid vh-100 d-flex justify-content-center align-items-center'>Cargando Usuario</p>

             )}
        </div>
    </>
  )
}