import { Box, HStack, Image, Skeleton, Text, Wrap } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllCategories } from "../../api/api";

function Cards() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  function getCategories() {
    setLoading(true);
    getAllCategories()
      .then((res) => {
        setCategories(res.data.totalCategories);
      })
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }

  useEffect(() => {
    getCategories();
  }, []);
  
  if (loading)
    return (
      <Wrap margin={"0 auto"} justify="space-between"  gap="20px">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((el) => (
          <Skeleton color="green.300">
            <Box
              w={{ base: "305px", sm: "350px", lg: "350px", xl: "370px" }}
              height="100px"
            ></Box>
          </Skeleton>
        ))}
      </Wrap>
    );

  return (
    <Wrap
      padding={1}
      mt={5}
      gap={{ base: "10px", sm: "10px", lg: "15px", xl: "20px" }}
      justify="space-between"
      alignItems="center"
    >
      {categories.map((tab) => (
        <Link className="link" key={tab} to={`/healthcare/products/${tab}`}>
          <HStack
            w={{ base: "305px", sm: "350px", lg: "350px", xl: "370px" }}
            border="0.5px solid rgba(0,0,0,0.2)"
            borderRadius={"10px"}
            padding={"10px"}
            _hover={{ boxShadow: "0 0 5px 2px #16876e", border: "transparant" }}
          >
            <Image w={"100px"} src={require(`./../../../public/images/${tab}.webp`)}></Image>
            <Text>{tab} </Text>
          </HStack>
        </Link>
      ))}
    </Wrap>
  );
}

export default Cards;
