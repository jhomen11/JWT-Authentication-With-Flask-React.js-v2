import React, { useState, useEffect, useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";


export const Detalle = () => {
    const { store, actions } = useContext(Context);
    console.log(store.datos?.token)
    console.log(store.usuario)
    const { id } = useParams();
    const history = useNavigate()

    useEffect(() => {
        actions.datosPrivados(id);
      }, []);

    return(
        <>
        <h1>{store.usuario.name}</h1>
		<button onClick={()=> {actions.logout(history)} } className="btn btn-primary">Logout</button>

        <Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
        </>
    )
}