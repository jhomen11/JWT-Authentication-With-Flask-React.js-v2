import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Home = () => {
  
  

  const { store, actions } = useContext(Context);



  return (
    <div className=" container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <h2 className="text-center display-3">Login</h2>
          <form className="mt-4">
            <div className="mb-2">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" />
            </div>
            <div className="mb-2">
              <label className="form-label">Password</label>
              <input type="password" className="form-control" />
            </div>
            <div className="d-grid mt-4">
              <button className="btn btn-success">Login</button>
            </div>
            <div className="mt-4 text-center">
              <p className="fw-bold">No account? Create one Now</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
