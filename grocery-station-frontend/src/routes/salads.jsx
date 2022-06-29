import "../App.css";
// import { Outlet, NavLink } from "react-router-dom";
import Menu from "./menu";

const Salads = () => {
  return (
    <div>
      <div>
        <Menu />
      </div>
      <div className="menu-title">
        <h1>Salads</h1>
      </div>
      <h1>
        <u>Salads</u>
      </h1>
      <ul>
        <li>Garden Salad</li>
        <li>Club Salad</li>
      </ul>
    </div>
  );
};

export default Salads;
