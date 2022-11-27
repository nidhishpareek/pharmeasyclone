import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import HealthCareBreadcrumb from '../Components/Healthcare/Breadcrumb'
import Cards from '../Components/Healthcare/Cards'
import ImageCarousal from '../Components/Home/ImageCarousal'
import Tabs from '../Components/Navbar/Tabs'


function Healthcare() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  
  return (
    <>
    
    <Tabs/>
    
    <Box  width={"85%"} margin="80px auto">
    <HealthCareBreadcrumb/>
      <ImageCarousal />
    
      
    <Cards> 
    </Cards>
  </Box></>
    
    
  )
}

export default Healthcare
