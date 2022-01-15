import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useHistory, Redirect } from "react-router-dom";
import "../../styles/home.css";
import { useState } from "react/cjs/react.development";

export const Home = () => {
  const formInicial = { email: "", password: "" };

  const { store, actions } = useContext(Context);
  const [datoslogin, setDatosLogin] = useState({ email: "", password: "" });
  const [validacion, setValidacion] = useState(false);
  const [error, setError] = useState("");
  const [errorValidadcion, setErrorValidacion] = useState(false);

  console.log("Desde Home", store.datos);

  const handleReset = () => {
    setDatosLogin(formInicial);
  };

  const handleChange = (e) => {
    setDatosLogin({
      ...datoslogin,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    actions.setLogin(datoslogin);

    
    
    setValidacion(true);
    if (datoslogin.email == "" || datoslogin.password == "") {
      setError("Todos los campos son obligatorios");
      return
    } 
    setValidacion(false);
    if (!store.datos?.status) {
       setErrorValidacion(true);
        return
    }
    // else if (!store.datos || store.datos == "") {
    //   setErrorValidacion(true);
      
    // }

    handleReset();
  };

  return (
    <div className=" container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <h2 className="text-center display-3">Login</h2>
          {validacion ? (
            <p className="text-center mt-3 alert alert-danger">{error}</p>
          ) : null}

          {errorValidadcion ? (
            <p className="text-center mt-3 p-1 alert alert-danger">
              Email o Contraseñas Ingresados son Incorrectos
            </p>
          ) : null}
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-2">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={handleChange}
                value={datoslogin.email}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
                value={datoslogin.password}
              />
            </div>
            <div className="d-grid mt-4">
              <button className="btn btn-success">Login</button>
            </div>
            <div className="mt-4 text-center">
              <p className="fw-bold">
                No account? <Link to={"/registro"}>Create one Now</Link>
              </p>
              {store.datos ? <Redirect to={`/detalle/${store.datos.info_user.id}`} /> : null}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
