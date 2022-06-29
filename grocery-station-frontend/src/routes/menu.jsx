import "../App.css";
import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="menu-nav">
        <div className="menu-item">
          <NavLink to="/menu/sandwiches">Sandwiches</NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/menu/salads">Salads</NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/menu/breakfast">Breakfast</NavLink>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Menu;
