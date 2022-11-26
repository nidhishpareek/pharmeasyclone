import { Box } from '@chakra-ui/react';
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from '../Components/SingleProducts/Product';

function SingleProduct() {
    const {id} = useParams();
    const [productData,setProductData] = useState([]);
    useEffect(()=>{

        axios.get(`https://pharmeasy-server1234.herokuapp.com/Products/${id}`)
        .then(res=>setProductData(res.data));

    },[id])
    useEffect(()=>{
        window.scrollTo(0,0)
      },[])
  return (
    <Box>
      <Product data={productData} />
    </Box>
    
  )
}

export default SingleProduct