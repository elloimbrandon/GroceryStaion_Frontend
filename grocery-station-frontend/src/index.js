import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/home";
import Menu from "./routes/menu";
import About from "./routes/about";
import Sandwiches from "./routes/sandwiches";
import Salads from "./routes/salads";
import Breakfast from "./routes/breakfast";
import Admin from "./routes/admin";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="home" element={<Home />} />
        <Route path="menu" element={<Menu />} />
        <Route path="menu/sandwiches" element={<Sandwiches />} />
        <Route path="menu/salads" element={<Salads />} />
        <Route path="menu/breakfast" element={<Breakfast />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<h1>Nothing To Show!</h1>} />
      </Route>
      <Route path="admin" element={<Admin />} />
    </Routes>
  </BrowserRouter>
);
