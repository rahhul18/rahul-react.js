import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const ProductCard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    function fetchdata() {
      axios
        .get("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
        .then((res) => setData(res.data.data))
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
            <img src={el.img} style={{ width: "150px" }} alt="" />
            
            <p>{el.brand}</p>
            <p>{el.title}</p>
            <h3>{el.price}</h3>
            <p>{el.category}</p>
           <Link to={`/singleproductpage/${el.id}`} >
            <button>View</button>
           </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
