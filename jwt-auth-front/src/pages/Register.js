import React, { useState } from "react";

import AuthService from "../services/AuthService";

import { useNavigate, Link } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const register = (e) => {
    e.preventDefault();

    AuthService.register(form)

      .then(() => {
        alert("Registration Success");

        navigate("/");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow">
            <div className="card-header bg-success text-white">
              <h3 className="text-center">Register</h3>
            </div>

            <div className="card-body">
              <form onSubmit={register}>
                <input
                  type="text"
                  name="username"
                  className="form-control mb-3"
                  placeholder="Username"
                  onChange={handleChange}
                />

                <input
                  type="password"
                  name="password"
                  className="form-control mb-3"
                  placeholder="Password"
                  onChange={handleChange}
                />

                <button className="btn btn-success w-100">Register</button>
              </form>

              <div className="text-center mt-3">
                <Link to="/">Already have account? Login</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
