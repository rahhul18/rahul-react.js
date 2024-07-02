import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProductPage = () => {

  const [descData , setdescData] =useState([])
const {id} =useParams()
  useEffect (()=>{
    axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products/${id}`)
    .then((res)=>setdescData(res.data.data))
    .catch((err)=>console.log(err))
  },[])
  return (
    <div>
      <div style={{  display:"flex" , justifyContent:"center" }}>
        
          <div key={descData.id} style={{ border: "2px solid black", padding: "16px" ,width:"40%"}}>
            <img src={descData.img} style={{ width: "200px"  }} alt="" />
            <div style={{textAlign:"left"}}>
            <p><strong>Title:-</strong>{descData.brand}</p>
            <h3> <strong>price:-</strong>{descData.price}</h3>
            <p><strong>Category:-</strong>{descData.category}</p>
            <p><strong>Description:-</strong>{descData.details}</p>
            </div>

          </div>
        
      </div>
    </div>
  )
}

export default SingleProductPage
