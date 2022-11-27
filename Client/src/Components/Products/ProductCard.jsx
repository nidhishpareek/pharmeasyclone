import { Badge, Box, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";


function ProductCard({ image, title, originalPrice, newPrice, offer,id }) {
  return (
    <Box
      width="240px"
      height="340px"
      border="1px solid rgba(0,0,0,0.2)"
      padding={4}
      borderRadius="10px"
      _hover={{border:"1px solid #10847E "}}
    >
      <Link className="noHover" to={`/healthcare/product/${id}`}>
        <Box height="216px">
          <Image height="100%" src={image} margin="0 auto"></Image>
        </Box>
        <Box>
          <Text
            noOfLines={2}
            textAlign="left"
            fontSize="16px"
            fontWeight={"700"}
          >
            {title}
          </Text>
        </Box>
        <Box>
          <HStack>
            <Text color="#8897a2" fontSize="14px">
              MRP
              <span
                style={{ textDecoration: "line-through", marginLeft: "5px" }}
              >
                ₹{originalPrice}
              </span>
            </Text>
            <Badge colorScheme='red'>{offer}%</Badge>
          </HStack>
          <Text textAlign="left" fontWeight={"500"}> ₹ {newPrice}</Text>
        </Box>
      </Link>
    </Box>
  );
}

export default ProductCard;
