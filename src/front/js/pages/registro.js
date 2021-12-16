import React from "react";

export const Registro = () => {
  

  return (
    <div className=" container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
            <h2 className="text-center display-3">Sign Up</h2>
          <form className="mt-4">
          <div className="mb-2">
				<label className="form-label">Name</label>
				<input type="text" className="form-control"/>
			</div>
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
					Register
				</button>
			</div>
          </form>
        </div>
      </div>
    </div>
  );
};