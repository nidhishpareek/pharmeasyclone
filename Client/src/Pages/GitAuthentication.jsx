import { Box, Container, Flex, Text, Toast, useToast } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
// import queryString from "query-string"
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getSuccess } from "../Redux/Auth/action";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GitAuthURL } from "../allAPI";
export default function GitAuthentication() {
  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const toast = useToast();
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log(URLSearchParams)
    // const query = queryStr ing.parse(window.location.search)
    const code = searchParams.get("code");
    console.log(code);

    axios
      .get(GitAuthURL + `?code=${code}`)
      .then((response) => {
        console.log("token", response.data.data.token);
        console.log("logged in");
        dispatch(getSuccess(true));
        localStorage.setItem("isAuth", true);
        localStorage.setItem("token", JSON.stringify(response.data.data.token));
        navigate("/");
      })
      .catch(() => {
        console.log("eooafsd");
        toast({
          title: "Something went wrong",
          status: "error",
          duration: 3000,
          isClosable: true,
          position: "top",
        });
        setTimeout(() => {
          navigate("/");
        }, 3000);
      });
  }, []);
  return (
    // <Container>
    <Flex h={"300px"} align="center" gap={"30px"} justifyContent="center">
      <Spinner /> <Text>Please wait.... Redirecting you to HomePage</Text>
    </Flex>
    // </Container>
  );
}
