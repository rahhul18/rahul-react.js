import { useState } from 'react'

import './App.css'
import StudentForm from './components/StudentForm'
import Login from './components/Login'


function App() {
  const [toggle, setToggle] = useState(false)
  

  const Toggle=()=>{
    setToggle(prevtoggle=> !prevtoggle );
  }
  return (
    <>
    {toggle ? <StudentForm />:<Login />}
    <button onClick={Toggle}>{toggle?"Sign-up":"Login"}</button>
   
    </>
  )
}

export default App