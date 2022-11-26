import { HStack, Image, Text, Wrap } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
// import {categories} from '../Home/CategoryCraousal'
function Cards() {

  return (
    <Wrap padding={1} mt={5} gap={{base:"10px",sm:"10px",lg:"15px",xl:"20px"}} justify="space-between" alignItems="center">
      {/* {categories.map(tab =><Link className='link'  key={tab.path} to={tab.path}>
      <HStack w={{base:"305px",sm:"350px",lg:"350px",xl:"370px"}} border="0.5px solid rgba(0,0,0,0.2)" borderRadius={"10px"} padding={"10px"} _hover={{boxShadow:"0 0 5px 2px #16876e",border:"transparant"}}><Image w={"100px"} src={tab.image}></Image>
      <Text>{tab.title} </Text>
        </HStack>
        </Link>)}   */}
         </Wrap>
    
  )
}

export default Cards