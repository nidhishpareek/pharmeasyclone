import { Box, Image, Button, useToast } from "@chakra-ui/react";
import { GitAuthAPI } from "../../allAPI";
import gitIcon from "../../BannerImages/github.svg";
const GitAuthButton = () => {
  const toast = useToast();
  // toast({
  //   title: "Something went wrong",
  //   status: "error",
  //   duration: 3000,
  //   isClosable: true,
  //   position: "top",
  // });
  // const gitLoginFunction = () => {
  //   // axios.post(GitAuthAPI, {})
  // };
  return (
    <Box>
      <Button
      as={'link'}
      href='https://github.com/login/oauth/authorize?client_id=ab76271b8143f19ff35d'
        // onClick={gitLoginFunction}
        w={"100%"}
        style={{ backgroundColor: "black", color: "white" }}
        leftIcon={
          <Image
            src={gitIcon}
            h="40px"
            bgColor="white"
            borderRadius="50%"
          ></Image>
        }
      > 
        Sign in with GitHub
      </Button>
    </Box>
  );
};

export default GitAuthButton;
