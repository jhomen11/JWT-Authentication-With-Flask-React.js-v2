import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Detalle = () => {
  const { store, actions } = useContext(Context);
  console.log(store.datos?.token);
  console.log(store.usuario);
  const { id } = useParams();
  const history = useNavigate();

  useEffect(() => {
    actions.datosPrivados(id);
  }, []);

  return (
    <>
      <div className="container">
        <div className="row mt-3">
          <div className="col">
            <h1 className="text-center">Bienvenido {store.usuario.name}</h1>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <h2 className="text-center">Perfil Privado</h2>
          </div>
        </div>
        <div className="row mt-3 text-center">
          <div className="col">
            <button
              onClick={() => {
                actions.logout(history);
              }}
              className="btn btn-primary me-3"
            >
              Logout
            </button>

            <Link to="/">
              <button className="btn btn-primary">Back home</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
