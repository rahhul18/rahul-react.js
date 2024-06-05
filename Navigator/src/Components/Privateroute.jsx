import React from 'react'
import { Link } from 'react-router-dom'

const Privateroute = ({children}) => {
    const token = localStorage.getItem("Token")
    if(!token){
        return <div>
            <h2>You Are Not Login</h2>
            <Link to={ "/login"}> <button style={{border:"2px solid red"}}>Login Here</button> </Link> 
        </div>

    }
    return children
    
 
}

export default Privateroute
