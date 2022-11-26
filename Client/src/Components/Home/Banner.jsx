import { Box, Button,Text } from "@chakra-ui/react";
import React from "react";

function Banner() {
  return (
    <Box mt="20px"  padding={{base:"10px",sm:"10px",lg:"10px",xl:"0"}}
    borderRadius={{base:"10px",sm:"10px",lg:"10px",xl:"0"}}>
      <Box
        color="white"
        display="flex"
        borderRadius={{base:"10px",sm:"10px",lg:"10px",xl:"0"}}
        flexDirection={{ base: "column", sm: "column", lg: "row", xl: "row" }}
        padding={{ base: "10px", sm: "20px", lg: "30px", xl: "40px" }}
        width="100%"
        backgroundImage="radial-gradient(340px 340px at 115% -15%, rgba(227, 128, 183, 0.28) 1%, rgba(188, 104, 150, 0.49) 45%, transparent), radial-gradient(340px 340px at -15% 115%, rgba(227, 128, 183, 0.28) 1%, rgba(188, 104, 150, 0.49) 45%, transparent)"
        backgroundColor="#8678DE"
      >
        <Box flexGrow="1" textAlign="left">
          <Text fontSize="22px" fontWeight="600" mb={"10px"}>
            Become a PLUS member
          </Text>
          <Text fontWeight="500" color="#CFC9F2">
            And enjoy extra bachat on every order
          </Text>
          <Box
            mt="20px"
            height="2px"
            backgroundImage="linear-gradient(90deg, #F5B326 -1.35%, transparent 97.57%)"
          ></Box>
        </Box>
        <Box flexGrow="1" textAlign="left">
          <Text width="70%" fontSize="14px" fontWeight="500">
            Save flat 5% extra on medicines & enjoy FREE delivery with PLUS
            membership
          </Text>
          <Button mt="30px" colorScheme="yellow" color="white">
            Explore Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Banner;
