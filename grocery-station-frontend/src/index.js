import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./routes/home";
import Menu from "./routes/menu";
import About from "./routes/about";
import Sandwiches from "./routes/sandwiches";
import Salads from "./routes/salads";
import Breakfast from "./routes/breakfast";
import Deli from "./routes/deli";
import Admin from "./routes/admin";
import Location from "./routes/location";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="menu" element={<Sandwiches />} />
        <Route path="sandwiches" element={<Sandwiches />} />
        <Route path="salads" element={<Salads />} />
        <Route path="breakfast" element={<Breakfast />} />
        <Route path="deli" element={<Deli />} />
        <Route path="about" element={<About />} />
        <Route path="Location" element={<Location />} />
        <Route
          path="*"
          element={
            <div className="container flex flex-col align-content-center mt-20">
              <h1 className="container flex text-center text-3xl border-bottom border-dark w-auto">
                Nothing to show on this page!
              </h1>
              <a
                href="/home"
                className="container mt-4 flex bg-green-400 rounded w-auto justify-content-center text-2xl shadow"
              >
                Home
              </a>
            </div>
          }
        />
      </Route>
      <Route path="admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);
