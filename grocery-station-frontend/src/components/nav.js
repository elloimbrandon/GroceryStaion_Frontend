import "../App.css";
import react from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Nav = (props) => {
  let user = localStorage.getItem("user");

  const navigate = useNavigate();

  const handleTitle = (value) => {
    window.localStorage.setItem("title", JSON.stringify(value));
  };

  const handleSignOut = async (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    alert(`you successfully signed out!`);
    navigate("/home");
  };

  return (
    <div className="w-60 h-full shadow-md bg-white px-1 absolute">
      <ul className="flex-nav-column">
        <li>
          <NavLink
            onClick={() => {
              props.setTitle("Grocery Station");
              handleTitle("Grocery Station");
            }}
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            value="Menu"
            onClick={() => {
              props.setTitle("Menu");
              handleTitle("Menu");
            }}
            to="/menu"
          >
            Menu
          </NavLink>
        </li>
        <li>
          <NavLink
            onClick={() => {
              props.setTitle("About");
              handleTitle("About");
            }}
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          {user ? <button onClick={handleSignOut}>User Logout</button> : null}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
