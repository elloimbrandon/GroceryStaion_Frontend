// *** packages ***
// @material-tailwind/react -- not really using
// axios
// react-router-dom
// bootstrap

import "./App.css";

import { NavLink, useNavigate, Outlet } from "react-router-dom";
import Home from "./components/home";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/home");
  }, []);

  return (
    <>
      <Home />
    </>
  );
}

export default App;
