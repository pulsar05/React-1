import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Success() {
    const[count,setCount] = useState(15);
    const navigate = useNavigate();
   
  useEffect(() => {
    setInterval(() => setCount((count) => count - 1), 1000);
    setTimeout(() => navigate("/"),15000);
  },[navigate])
     
  return (
    <h1>Your Order Have Been Placed Successfully. <br />
    You Will Be Redirected In {count} Seconds </h1>
  )
}