import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Productlist = () => {
  const [product, setProduct] = useState([]);
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  

  useEffect(() => {
    fetchdata()
  }, [search, sort, page]);
  const fetchdata =()=>{
    axios
    .get("http://localhost:3000/products", {
      params: {
        _sort: sort,
        q: search,
        _limit: "6",
        _page: page,
      },
    })
    .then((res) => setProduct(res.data))
    .catch((err) => console.log(err));
  }

  

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3000/products/${id}`)
      .then((res) => {
        alert("deleted successfully");
        fetchdata(); 
      })
      .catch((err) => console.error(err));
  };
 
  return (
    <>
     <h1>Product Page</h1>
  
      <div
        style={{ display: "flex", flexDirection: "column",justifyContent: "center",width: "80%",margin: "50px auto"}}>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
       
        
          <select value={sort} onChange={(e) => setSort(e.target.value)} >
            <option value="">Sort By</option>
            <option value="title">title</option>
            <option value="price">price</option>
          </select>

          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search here..."/>

        <Link to={"/AddProduct"}> <button>AddProduct</button> </Link>
         
        </div>
       
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
            margin: "10px 0px",
          }}
        >
          {product.map((el) => (
            <div
              key={el.id}
              style={{ border: "2px solid black", padding: "10px 30px"}}
            >
              
              <img
                src={el.image}
                style={{
                  width: "150px",
                  height: "150px",
                  alignItems: "center",
                }}
                alt=""
              />
              <h6>{el.title}</h6>
              <h3>{el.price}</h3>
              <h6>{el.category}</h6>
              <Link to={`/Details/${el.id}`} >
            <button style={{background:"green"}} >View</button>
           </Link>
           <Link to={`/EditProduct/${el.id}`}>
              <button style={{background:"yellow" , margin:"0px 4px"}} >Edit Price</button>
            </Link>

              
             <button style={{background:"red"}} onClick={() => handleDelete(el.id)}>Delete</button>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Prev
          </button>
          <span>{page}</span>
          <button onClick={() => setPage(page + 1)}>Next</button>
        </div>
      </div>
    </>
  );
};

export default Productlist;
