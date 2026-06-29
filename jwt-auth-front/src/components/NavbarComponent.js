import React from "react";
import { Link, useNavigate } from "react-router-dom";

function NavbarComponent() {
  const navigate = useNavigate();

  const username = localStorage.getItem("username");

  const logout = () => {
    localStorage.clear();

    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to="/dashboard">
          JWT APP
        </Link>

        <div className="ms-auto">
          <span className="text-white me-3">Welcome {username}</span>

          <button className="btn btn-light" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavbarComponent;
