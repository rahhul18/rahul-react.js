import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaEye } from "react-icons/fa";


const ProductsTable = () => {
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
      <h2>Product Page</h2> 
      {/* <Link to={"/productcard"}>
                  <button>View All</button>
                </Link> */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead style={{background:"#057332"}}>
          <tr>
          
            <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Brand</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Category</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Price</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>View</th>
          
          </tr>
        </thead>
        <tbody style={{fontWeight:"500"}}>
          {data.map((el) => (
            <tr key={el.id}>
              
              <td style={{ border: "1px solid black", padding: "8px" }}>{el.id}</td>
              <td style={{ border: "1px solid black", padding: "8px"  , color:"green"}}>{el.brand}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{el.category}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{el.price}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
              <Link to={`/singleproductpage/${el.id}`} >
             <FaEye size={20} color="black" />
           </Link>
              </td>
                
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTable;
