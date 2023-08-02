import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import logo from "../assets/logoImage.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
interface Props {
  onSearch: (searchText: string) => void;
}
const NavBar = (props: Props) => {
  return (
    <HStack padding="10px">
      {/* <Image src={logo} boxSize="60px" /> */}
      <SearchInput onSearch={props.onSearch}></SearchInput>
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
