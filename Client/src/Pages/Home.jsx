import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import TabCarousal from '../Components/Home/TabCarousal'
import SearchBar from '../Components/Home/SearchBar'
import Banner from '../Components/Home/Banner'
import ImageCarousal from '../Components/Home/ImageCarousal'
import CategoryCraousal from '../Components/Home/CategoryCraousal'


function Home() {
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (
    <Box  bg="radial-gradient(150px 150px at 95% 0%, rgba(253, 186, 43, 0.3) 0%, rgba(253, 186, 43, 0) 100%), radial-gradient(150px 150px at 5% 0%, rgba(120, 213, 242, 0.3) 0%, rgba(253, 186, 43, 0) 100%)">
      <SearchBar/>

      <TabCarousal/>
      <Box paddingX={{base:"10px",sm:"20px",lg:"30px",xl:"50px"}}><ImageCarousal/></Box>
      
      <CategoryCraousal/>
      <Banner/>
      
    </Box>
      
    
  )
}

export default Home