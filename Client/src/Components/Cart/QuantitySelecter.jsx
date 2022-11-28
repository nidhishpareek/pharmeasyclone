import { Select } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { updateCart } from "../../Redux/Cart/action";

function QuantitySelecter({ id,amount }) {
  const dispatch = useDispatch();
  const [amt, setAmount] = useState(amount);
function update(id,amount){
    dispatch(updateCart(id,+amount));
}


  useEffect(()=>{
    const body = {
        amount:+amt
    }
    
    fetch(`https://pharmeasy-server1234.herokuapp.com/Cart/${id}`,{
        method:"PATCH",
        body:JSON.stringify(body),
        headers:{"content-type": "application/json"}
    }).then((res)=>res.json()).catch((err)=>console.log(err))
    
   
    
  },[amt])

  return (
    <Select
      value={amt}
      onChange={(e) => {
         setAmount(e.target.value);
         update(id,e.target.value)
         
      }}
      width="100px"
      fontWeight={"500"}
      placeholder="Qty"
    >
      <option value={1}>1</option>
      <option value={2}>2</option>
      <option value={3}>3</option>
      <option value={4}>4</option>
      <option value={5}>5</option>
      <option value={6}>6</option>
      <option value={7}>7</option>
      <option value={8}>8</option>
      <option value={9}>9</option>
      <option value={9}>10</option>
      
    </Select>
  );
}

export default QuantitySelecter;
