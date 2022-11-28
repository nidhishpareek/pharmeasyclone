import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import { Container, Stack } from "react-bootstrap";
import { FiTrash2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../../Redux/Cart/action";
import QuantitySelecter from "./QuantitySelecter";

function CartProduct(props) {
    const {data} = props;
    const {id,amount,originalPrice,newPrice,offer,img1,company,desc} = data;
    const dispatch = useDispatch();
    const {func} = props

    
    
   
    
  return (
    <HStack
      p={4}
      gap="20px"
      border={"1px solid grey"}
      borderRadius="10px"
      minW={{ lg: "500px" }}
      width="100%"
      justifyContent={"space-between"}
      
      
    >
      <Box   width={"100px"} height="60px"  >
        <Image  width="100%" height="100%" src={img1}  objectFit="fill" ></Image>
      </Box>
      <Box  width={"100%"}>
        <HStack alignItems={"flex-start"} justify={"space-between"}>
          <Text fontWeight={"500"} noOfLines="2">{desc}</Text>
          
         <DeleteIcon _hover={{color:"red"}} cursor="pointer" onClick={()=>func(id)}  fontSize={"16px"} />
        </HStack>
        <Text fontSize={"14px"} color="rgba(0,0,0,0.6)" mb={"6px"}>
          By {company}
        </Text>
        
        <HStack justify={"space-between"}>
          <QuantitySelecter id={id} amount={amount} />
          <VStack>
            <HStack>
              <Text fontSize={"12px"} textDecor={"line-through"}>
              ₹ {originalPrice}
              </Text>
              <Text fontSize={"12px"} color="red">
                {offer}% OFF
              </Text>
            </HStack>
            <Text textAlign={"right"} fontSize={"14px"} fontWeight="600">₹ {parseFloat((newPrice * amount).toFixed(2))}</Text>
          </VStack>
        </HStack>
        <Text  fontSize={"14px"} color="rgba(0,0,0,0.6)">
          Delivery by 15 Oct
        </Text>
      </Box>
    </HStack>
  );
}

export default CartProduct;
