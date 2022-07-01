import "../App.css";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Nav from "./nav";

const Home = () => {
  // const [title, setTitle] = useState(
  //   JSON.parse(window.localStorage.getItem("title")) || "Grocery Station"
  // );
  const [title, setTitle] = useState("Grocery Station");

  return (
    <div className="flex-main-container">
      <Nav setTitle={setTitle} />
      <div className="flex-column">
        <div className="flex-header">
          <h1 class="display-4 text-center">{title}</h1>
        </div>
        <div className="flex-main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
