import React, { useContext, useEffect, useState } from "react";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import { GlobalContext } from "../contexts/GlobalContext";

export default function Profile() {
  const { logout, getUserData } = useContext(GlobalContext);

  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const data = await getUserData();

      if (data) {
        setUserProfile(data);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <NavBar />
      <div className="container-fluid vh-100 d-flex justify-content-center align-items-center bg-light">
        {userProfile ? (
          <>
            <div className="text-center">
              <h2 className="display-6 fw-bold text-dark mb-4">
                Hola, {userProfile.email}
              </h2>
              <p>Info usuario: {userProfile.id}</p>
              <Link
                onClick={() => logout()}
                as={Link}
                to="/login"
                className="btn btn-dark"
              >
                Cerrar sesión
              </Link>
            </div>
          </>
        ) : (
          <p className="container-fluid vh-100 d-flex justify-content-center align-items-center">
            Cargando Usuario
          </p>
        )}
      </div>
    </>
  );
}
