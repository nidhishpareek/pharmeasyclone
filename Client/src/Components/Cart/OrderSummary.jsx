import { Accordion,AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Button, Divider, Flex, HStack, Radio, RadioGroup, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { TbDiscount2 } from 'react-icons/tb'
import { useSelector,useDispatch } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { getCartTotal } from '../../Redux/Cart/action'


function OrderSummary() {
    const [value, setValue] = useState('1')
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {cartItems,totalAmount,totalOriginalAmount} = useSelector(state => state.cart)
    
    useEffect(()=>{
        dispatch(getCartTotal())
    },[cartItems])
  return (
    <Box >
        <VStack spacing={"20px"}>
        <Accordion  allowMultiple width={"100%"} >
  <AccordionItem   borderRadius="5px" border={"1px solid teal"} padding="1px">
    <h2>
      <AccordionButton disabled={cartItems.length < 1}  >
        <Flex flex='1' textAlign='left' alignItems={"center"} color={"teal"} fontWeight="700">
        <TbDiscount2/><Text ml={"10px"}>Apply Coupon</Text> 
        </Flex>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>

        <RadioGroup onChange={setValue} value={value}>
      <VStack spacing={"10px"} width={"100%"} textAlign="start" fontWeight={"bold"} fontSize={"12px"}>
        <HStack  width={"100%"} justifyContent="space-between"><Text>GET 10% OFF USING PHARM10</Text><Radio value='1'></Radio></HStack>
        <HStack width={"100%"} justifyContent="space-between"><Text>GET 20% OFF USING PHARM20</Text><Radio value='2'></Radio></HStack>
        <HStack width={"100%"} justifyContent="space-between"><Text>GET 30% OFF USING PHARM30</Text><Radio value='3'></Radio></HStack>
       
      </VStack>
    </RadioGroup>
        
      
    </AccordionPanel>
  </AccordionItem>

  
</Accordion>
            <Button disabled={cartItems.length < 1 } width={"100%"} onClick={()=>navigate("/delivery")} colorScheme={"teal"}>Proceed To Buy</Button>
            <Divider/>
            <VStack width={"100%"} >
            <Text width={"100%"} textAlign={"left"} fontWeight="500"> Order Summary</Text>
            <HStack width={"100%"} justify={"space-between"}><Text fontSize={"14px"}>Cart Value</Text><Text><span style={{marginRight:"10px",fontSize:"12px",textDecoration:"line-through"}}>₹{totalOriginalAmount}</span>₹ {totalAmount}</Text></HStack>
            <HStack width={"100%"} justify={"space-between"}><Text fontSize={"14px"}>Amount to be paid</Text><Text>₹ {totalAmount}</Text></HStack>
            </VStack>
            
        </VStack>
    </Box>
  )
}

export default OrderSummary