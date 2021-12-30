import React, { useState, useContext } from "react";
import reactRouterDom from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from 'react-router-dom'

export const Registro = () => {
  const { store, actions } = useContext(Context);
  const history = useHistory()

  
  const formInicial = { name: "", email: "", password: "", password_2:"", is_active: "" };
  
  const [datosFormulario, guardarDatosFormulario] = useState({name: "", email: "", password: "", password_2:"", is_active: "" });
  const [validacion, setValidacion] = useState(false)
  const [error, setError] = useState("")
  const [errorPassword, setErrorPassword] = useState(false)

  const handleChange = (e) => {
   
      guardarDatosFormulario({
        ...datosFormulario,
        [e.target.name]: e.target.value
     
      })
    
  };

  const handleReset = () => {
    guardarDatosFormulario(formInicial);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setValidacion(true)
    if(datosFormulario.name.trim() == "" || datosFormulario.email.trim() == "" || datosFormulario.password == "" || datosFormulario.password_2 == ""){
      setError("Todos los campos son Obligatorios")
      return
    }
    setValidacion(false)

    if(datosFormulario.password !== datosFormulario.password_2){
      setErrorPassword(true)
      return
    }
    setErrorPassword(false)
    
        
    actions.setDatosFormulario(datosFormulario)
      alert("Usuario Registrado Exitosamente")
      history.push('/')

    handleReset();
  };

  return (
    <div className=" container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <h2 className="text-center display-4">Sign Up</h2>
          {
            validacion ?<p className="text-center mt-3 alert alert-danger">{error}</p>:null
          }
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-2">
              <label className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={handleChange}
                value={datosFormulario.name}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={handleChange}
                value={datosFormulario.email}
                />
            </div>
            <div className="mb-2">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
                value={datosFormulario.password}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                name="password_2"
                onChange={handleChange}
                value={datosFormulario.password_2}
              />
              {errorPassword ? <p className="text-danger mt-2">*Los datos no son iguales</p>: null}
            </div>
            <div className="d-grid mt-4">
              <button className="btn btn-success">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
