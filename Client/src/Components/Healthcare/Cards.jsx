import { HStack, Image, Text, Wrap } from "@chakra-ui/react";
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
            <Image w={"100px"} src={`https://raw.githubusercontent.com/nidhishpareek/pharmeasyclone/mergetesting/Client/public/images/${tab}.webp`}></Image>
            <Text>{tab} </Text>
          </HStack>
        </Link>
      ))}
    </Wrap>
  );
}

export default Cards;
