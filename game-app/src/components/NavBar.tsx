import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logoImage.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <HStack padding="10px">
      {/* <Image src={logo} boxSize="60px" /> */}
      <SearchInput></SearchInput>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
