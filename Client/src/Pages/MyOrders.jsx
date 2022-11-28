import { Box, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { getOrders } from "../api/api";

function MyOrders() {
    const [data,setData] = useState([]);

    useEffect(()=>{
        getOrders().then(res=>{
            setData(res.data.data)
            console.log(res.data)}).catch(err=>console.log(err))

    },[])
  return (
    <Stack
      w={{ base: "90%", sm: "90%", lg: "90%", xl: "80%" }}
      margin="0 auto"
    >
        <Heading textAlign={"center"}>My Orders</Heading>


        {data.length<1 && <Text textAlign={"center"}  m={"50px auto"}>PLACE ORDER TO SHOW HERE</Text>}
        

        {data.map(el=>
            <Stack key={el._id} border="1px solid black" padding={4} borderRadius="10px">
                <Box>
                <Heading fontSize={"25px"}>Order Placed on : {
                    el.createdAt.split('T')[0] 
                }
                   </Heading>
                </Box>
                
                {
                    el.cartItems.map(el=><li style={{display:"flex",justifyContent:"space-between"}}  key={el._id} >{el.productId.title}<span >Quantity : {el.quantity}</span></li>)
                }
            </Stack>
    )}


    </Stack>
  );
}

export default MyOrders;
