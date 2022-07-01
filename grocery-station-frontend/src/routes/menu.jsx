import "../App.css";
import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="container flex flex-row w-96 justify-content-center space-x-5">
        <div className="text-2xl">
          <NavLink to="/menu/sandwiches">Sandwiches</NavLink>
        </div>
        <div className="text-2xl">
          <NavLink to="/menu/salads">Salads</NavLink>
        </div>
        <div className="text-2xl">
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
