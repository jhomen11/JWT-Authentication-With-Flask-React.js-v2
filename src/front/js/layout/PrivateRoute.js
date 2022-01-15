import React, { useContext, useState, useEffect } from "react";
import {Route, Redirect, useLocation} from "react-router-dom";
import { Context } from "../store/appContext";

const PrivateRoute  = ({ children, ...props }) =>{
  const { store, actions } = useContext(Context)
  const { state} = useLocation()

  console.log(store.usuario)

  if (store.datos?.token) {
    return <Redirect to={state?.from || '/'} />
  }
    return(
      <Route
        {...props}
          render={({ location }) => (
        store.usuario !== "" ?
            children
        : <Redirect to={{
          pathname: '/login',
          state: { from: location }
        }} />
    )} />   
    )

}

export default PrivateRoute
