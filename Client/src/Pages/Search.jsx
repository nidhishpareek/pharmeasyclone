import { Box, Button, Flex, Center, Heading, Hide, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { addToCart, getCartTotal, remove } from '../Redux/Cart/action';

function Search() {
  const isAuth = localStorage.getItem('isAuth');
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { cartItems } = useSelector((state) => state.cart);
  

 const {name} = useParams();
console.log(name);
const [data,setData] = useState([]);
function updateCart(amt,id,el){
  axios.post("https://pharmeasy-server1234.herokuapp.com/Cart",{
      ...el,
      amount:amt,
  }).then(res=>{
      dispatch(addToCart({...el,amount:amt}))
  })  
}
function removeItem(id){
        
  fetch(`https://pharmeasy-server1234.herokuapp.com/Cart/${id}`,{
  method:"DELETE",
 
  headers:{"content-type": "application/json"}
}).then((res)=>res.json()).then(dispatch(remove(id))).catch((err)=>console.log(err))


}

 useEffect(()=>{
  axios.get(`https://pharmeasy-server1234.herokuapp.com/Products?q=${name}`).then(res=>setData(res.data))
 },[name])
 useEffect(()=>{
  dispatch(getCartTotal());
 },[cartItems])

  return (
    <Box display="flex" w={{base: "90%", sm:"90%", md:"90%", lg:"90%", xl:"70%"}} m="auto" justifyContent="space-between"  my="30px">
      {/* Left */}
      {data.length>0 ? <Box w={{base: "90%", sm:"90%", md:"90%", lg:"60%", xl:"60%"}} display="flex" gap={"20px"} flexDirection="column">
        {/* 1 product */} 
        <Heading p={4} fontSize="25px"color="#4f585e">Showing all results for <span  fontWeight="bold">{name}</span></Heading>

        {data.map(el=>(<Flex px={6} py={5} border="1px solid #a7bdd3" borderRadius="10px">
          <Box mr="20px">
            <Image mr="20px" w="50px" p="5px" src={el.img1} alt=""/>
          </Box>
          <Flex flexDirection="column" flex>
              <Heading mb="10px" fontSize={{base: "18px", sm:"18px", md:"18px", lg:"22px", xl:"22px"}} color="#4f585e">{el.desc}</Heading>
              <Text mb="10px" fontWeight="" color="#8897a4">By {el.company}</Text>
              
              <Flex justifyContent="space-between" flexDirection={{base:"column", sm:"column", md:"column", lg:"row", xl:"row"}}>
                <Flex>
                  <Heading mr="5px" fontSize="22px" color="#4f585e">₹{el.newPrice}</Heading>
                  <Text color="#8897a4" mr="5px" mt="5px">MRP <Text as="s" mr="5px">₹{el.originalPrice}</Text></Text>
                  
                </Flex>
                {!cartItems.find(e=>e.id===el.id)  ?
                  <Button colorScheme={"teal"} onClick={()=>{
                    if(!isAuth){
                      navigate("/");
                      return;
                    }
                    updateCart(1,el.id,el)
                  }}  mt="10px"     > Add to Cart</Button>
                  : 
                  <Button  mt="10px"  colorScheme={"teal"} variant="outline" onClick={()=>{
                    removeItem(el.id)
                  }}>Remove</Button>
                }
                
              </Flex>
          </Flex>
        </Flex>))}
        
      </Box> : <Center>NO PRODUCTS FOUND TRY WITH A DIFFERENT KEYWORD</Center>}
      {/* Right */}
      <Hide below="lg">
        <Box w="400px" p={4}>
            <Text p={3} fontWeight="bold" fontSize="20px" color="#4f585e" >Please add item(s) to proceed</Text>
            <Button mb="20px" w="100%" onClick={()=>navigate("/cart")}  colorScheme={"teal"} p={7} mt="10px" fontSize="22px" _hover={{bg:"#959595"}} >View Cart</Button>
            <Box color="#4f585e" p={4} border="1px solid #a7bdd3" borderRadius="10px" >
              <Center p={4} borderBottom="1px solid #a7bdd3">
                <Text fontWeight="bold">What is a valid prescription ?</Text>
              </Center>
              <Text my="20px">A valid prescription contains:</Text>
              <Flex mb="10px">
                <Image mr="20px" w="40px" h="40px" p="5px" src="https://cdn-icons-png.flaticon.com/512/1107/1107126.png"/>
                <Text  p={2}>Doctor Details</Text>
              </Flex>
              <Flex mb="10px">
                <Image mr="20px" w="40px" h="40px" p="5px" src="https://cdn0.iconfinder.com/data/icons/office-83/32/calendar-info-512.png"/>
                <Text  p={2}>Date of Prescription</Text>
              </Flex>
              <Flex mb="10px">
                <Image mr="20px" w="40px" h="40px" p="5px" src="https://icon-library.com/images/account-icon/account-icon-13.jpg"/>
                <Text  p={2}>Patient Details</Text>
              </Flex>
              <Flex mb="10px">
                <Image mr="20px" w="40px" h="40px" p="5px" src="https://www.viscotec.de/media/Pharma-ViscoTec-Icon.png"/>
                <Text  p={2}>Dosage Details</Text>
              </Flex>
            </Box>
        </Box>
      </Hide>
    </Box>
  )
}

export default Search