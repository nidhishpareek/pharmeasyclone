import React from 'react'
import { Navigate } from 'react-router-dom';
import { Payment } from '../Components/Payment/Payment';

function Payments() {
    const [auth,setAuth] = localStorage.getItem("isAuth") || false;


    if(!auth){
        <Navigate to={"/login"}/>
    }
    

  return (
    <Payment/> 
  )
}

export default Payments