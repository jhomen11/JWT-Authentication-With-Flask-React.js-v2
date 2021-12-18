import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";

export const Registro = () => {
  const { store, actions } = useContext(Context);

  const formInicial = { name: "", email: "", password: "", is_active: true };

  const [datosFormulario, guardarDatosFormulario] = useState(formInicial);

  const handleChange = (e) => {
    guardarDatosFormulario({
      ...datosFormulario,
      [e.target.name]: e.target.value,
    });
  };

  const handleReset = () => {
    guardarDatosFormulario(formInicial);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    actions.setDatosFormulario(datosFormulario);

    handleReset();
  };

  return (
    <div className=" container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <h2 className="text-center display-3">Sign Up</h2>
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
            <div className="d-grid mt-4">
              <button className="btn btn-success">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
