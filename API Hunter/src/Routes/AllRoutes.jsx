import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login";


import SingleProductPage from "./SingleProductPage";
import ProductCard from "../Components/ProductCard";
import ProductsTable from "../Components/ProductsTable";
import PrivateRoute from "../Components/PrivateRoute";
import Dashboard from "./Dashboard";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
       
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/producttable" element={<ProductsTable />}></Route>
        <Route
          path="/productcard"
          element={
            <PrivateRoute>
              <ProductCard />
            </PrivateRoute>
          }
        ></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/singleproductpage/:id" element={
         <PrivateRoute>
          <SingleProductPage />
          </PrivateRoute>
        }></Route>
        
      </Routes>
    </div>
  );
};

export default AllRoutes;
