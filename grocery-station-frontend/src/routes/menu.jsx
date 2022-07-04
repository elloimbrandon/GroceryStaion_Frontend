import "../App.css";
import { useState, useEffect } from "react";
import { Outlet, NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <div className="mt-2 bg-rich-green text-plat-num shadow w-full rounded flex flex-row w-full justify-content-center space-x-5">
        <div className="text-3xl">
          <NavLink to="/sandwiches">Sandwiches</NavLink>
        </div>
        <div className="text-3xl">
          <NavLink to="/salads">Salads</NavLink>
        </div>
        <div className="text-3xl">
          <NavLink to="/breakfast">Breakfast</NavLink>
        </div>
        <div className="text-3xl">
          <NavLink to="/deli">Deli Items</NavLink>
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Menu;
