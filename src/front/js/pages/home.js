import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className=" container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <form>
            <div className="mb-2">
				<label className="form-label">Email</label>
				<input type="email" className="form-control"/>
			</div>
			<div className="mb-2">
				<label className="form-label">Password</label>
				<input type="password" className="form-control"/>
			</div>
			<div className="d-grid mt-4">
				<button className="btn btn-success">
					Enviar
				</button>
			</div>
          </form>
        </div>
      </div>
    </div>
  );
};
