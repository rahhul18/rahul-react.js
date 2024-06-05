import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Desc = () => {

  const [descData , setdescData] =useState([])
const {id} =useParams()
  useEffect (()=>{
    axios.get(`https://fakestoreapi.com/products/${id}`)
    .then((res)=>setdescData(res.data))
    .catch((err)=>console.log(err))
  },[])
  return (
    <div>
      <div style={{  display:"flex" , justifyContent:"center" }}>
        
          <div key={descData.id} style={{ border: "2px solid black", padding: "12px" ,width:"30%"}}>
            <img src={descData.image} style={{ width: "200px"  }} alt="" />
            <div style={{textAlign:"left"}}>
            <p><strong>Title:-</strong>{descData.title}</p>
            <h3> <strong>price:-</strong>{descData.price}</h3>
            <p><strong>Category:-</strong>{descData.category}</p>
            <p><strong>Description:-</strong>{descData.description}</p>
            </div>

          </div>
        
      </div>
    </div>
  )
}

export default Desc
