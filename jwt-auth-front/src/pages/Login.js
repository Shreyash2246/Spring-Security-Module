import React, { useState } from "react";
import AuthService from "../services/AuthService";
import { useNavigate, Link } from "react-router-dom";

function Login() {
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

  const login = (e) => {
    e.preventDefault();

    AuthService.login(form)
      .then((res) => {
        localStorage.setItem("token", res.data.token);

        localStorage.setItem("username", form.username);

        navigate("/dashboard");
      })
      .catch(() => {
        alert("Invalid Credentials");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h3 className="text-center">Login</h3>
            </div>

            <div className="card-body">
              <form onSubmit={login}>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="form-control mb-3"
                  onChange={handleChange}
                />

                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="form-control mb-3"
                  onChange={handleChange}
                />

                <button className="btn btn-primary w-100">Login</button>
              </form>

              <div className="mt-3 text-center">
                <Link to="/register">New User? Register</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
