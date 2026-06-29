import React from "react";

import NavbarComponent from "../components/NavbarComponent";

function Dashboard() {
  return (
    <>
      <NavbarComponent />

      <div className="container mt-5">
        <div className="card shadow-lg">
          <div className="card-body">
            <h2>Dashboard</h2>

            <hr />

            <h4>
              Welcome
              {localStorage.getItem("username")}
            </h4>

            <p>JWT Authentication Successful.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
