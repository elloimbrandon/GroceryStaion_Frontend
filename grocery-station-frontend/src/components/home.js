import "../App.css";
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Nav from "./nav";

const Home = () => {
  // const [title, setTitle] = useState(
  //   JSON.parse(window.localStorage.getItem("title")) || "Grocery Station"
  // );
  const [title, setTitle] = useState("Grocery Station");

  return (
    <div className="flex flex-row h-screen bg-plat-num">
      <Nav setTitle={setTitle} />
      <div className="flex-column overflow-scroll">
        <div>
          <div className="text-black w-full text-center border-dark">
            <img
              className="container h-full w-60"
              src={require("../images/groc-logo.png")}
              alt="First Slide"
            />
            {/* {title} */}
          </div>
        </div>
        <div className="container">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
