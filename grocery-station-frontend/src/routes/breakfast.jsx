import "../App.css";
// import { Outlet, NavLink } from "react-router-dom";
import Menu from "./menu";

const Breakfast = () => {
  return (
    <div>
      <div>
        <Menu />
      </div>
      <div className="menu-title">
        <h1>Breakfast</h1>
      </div>
      <h1>
        <u>Breakfast</u>
      </h1>
      <ul>
        <li>breakfast sandwich</li>
        <li>breakfast burrito</li>
      </ul>
    </div>
  );
};

export default Breakfast;
