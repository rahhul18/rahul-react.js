import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Products = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    function fetchdata() {
      axios
        .get("https://fakestoreapi.com/products")
        .then((res) => setData(res.data))
        .catch((err) => console.log(err));
    }
    fetchdata();
  }, []);

  return (
    <div>
      <h1>Product Page</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)" }}>
        {data.map((el) => (
          <div key={el.id} style={{ border: "2px solid black", margin: "2px", padding:"12px" , alignContent:"center"}}>
            <img src={el.image} style={{ width: "150px" }} alt="" />
            <p>
              {el.id}
            </p>
            <p>{el.title}</p>
            <h3>{el.price}</h3>
            <p>{el.category}</p>
           <Link to={`/Desc/${el.id}`} >
            <button>View</button>
           </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
