import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Login from "./Login";
import Desc from "./Desc";
import Privateroute from "./Privateroute";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/product"
          element={
            <Privateroute>
              <Products />
            </Privateroute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/desc/:id" element={<Desc />}></Route>
        
      </Routes>
    </div>
  );
};

export default AllRoutes;
