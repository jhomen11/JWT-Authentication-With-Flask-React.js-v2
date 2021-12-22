import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { useState } from "react/cjs/react.development";

export const Home = () => {
  
  const { store, actions } = useContext(Context);
  const [datoslogin, setDatosLogin] = useState({ email: "", password: ""})

  const handleChange = (e) =>{
    setDatosLogin({
      ...datoslogin,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    actions.setLogin(datoslogin)
  }

  return (
    <div className=" container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <h2 className="text-center display-3">Login</h2>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-2">
              <label className="form-label">Email</label>
              <input
                type="email" 
                className="form-control"
                name="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-2">
              <label className="form-label">Password</label>
              <input 
                type="password" 
                className="form-control"
                name="password"
                onChange={handleChange}
              />
            </div>
            <div className="d-grid mt-4">
              <button className="btn btn-success">Login</button>
            </div>
            <div className="mt-4 text-center">
              <p className="fw-bold">No account? <Link to={"/registro"}>Create one Now</Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
