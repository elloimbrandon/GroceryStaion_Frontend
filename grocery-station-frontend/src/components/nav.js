import "../App.css";
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
    navigate("/admin");
  };

  return (
    <div className="flex w-48 h-screen shadow-md bg-white ">
      <ul className="flex flex-col align-items-center justify-content-center w-full">
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
            to="menu/sandwiches"
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
          <NavLink
            onClick={() => {
              props.setTitle("Location");
              handleTitle("Location");
            }}
            to="/location"
          >
            Location
          </NavLink>
        </li>
        <li>
          {user ? (
            <button className="border mt-4" onClick={handleSignOut}>
              logout
            </button>
          ) : null}
        </li>
      </ul>
    </div>
  );
};

export default Nav;
