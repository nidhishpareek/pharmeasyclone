import {
  Text,
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../Redux/Cart/action";

export function LogOut() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const [username, setusername] = useState('User')
  const cancelRef = useRef();
  const navigate = useNavigate();
  const parseJwt = async (token) => {
    try {
      return JSON.parse(atob(token.split('.')[1]));
    } catch (e) {
      return null;
    }
  };
  useEffect(() => {
    if (localStorage.getItem("token")) {
      let token = localStorage.getItem("token");
      parseJwt(token).then((data) => {
        data.username ? setusername(data.username) : setusername(data.name);
        console.log("jwt token decoded", data);
      });
    }
  });
  const handleLogOut = () => {
    // console.log("LogOut Called");
    localStorage.clear();
    // dispatch(clearCart());
    onClose();
  };

  return (
    <>
      <Button
        color="black"
        bg={"transparent"}
        _hover={{ backgroundColor: "transparent", color: "teal" }}
        onClick={onOpen}
      >
        {username}
      </Button>
      <AlertDialog
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <AlertDialogOverlay />

        <AlertDialogContent>
          <AlertDialogHeader>Log Out?</AlertDialogHeader>
          <AlertDialogCloseButton />
          <AlertDialogBody>
            Are you sure you want to <span color="#10847e">Log Out</span> ?
          </AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              No
            </Button>
            <Button
              bg="#10847e"
              color="white"
              ml={3}
              onClick={() => {
                handleLogOut();
                navigate("/");
              }}
            >
              Yes
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
