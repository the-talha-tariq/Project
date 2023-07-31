import { HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logoImage.webp";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px" />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default NavBar;