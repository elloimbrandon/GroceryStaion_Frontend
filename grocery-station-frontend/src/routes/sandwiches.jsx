import "../App.css";
import { useState } from "react";
import Menu from "./menu";
// import { Outlet, NavLink } from "react-router-dom";

const Sandwiches = () => {
  return (
    <div>
      <div>
        <Menu />
      </div>
      <div className="menu-title">
        <h1>Sandwiches</h1>
      </div>
      <h1>
        <u>Sandwiches</u>
      </h1>
      <ul>
        <li>Italian</li>
        <li>Club</li>
      </ul>
    </div>
  );
};

export default Sandwiches;
