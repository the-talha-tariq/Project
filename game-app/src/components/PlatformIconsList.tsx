import {
  FaWindows,
  FaPlaystation,
  FaApple,
  FaLinux,
  FaAndroid,
  FaXbox,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames";
import { IconType } from "react-icons";

interface Props {
  platform: Platform[];
}
const PlatformIconsList = (props: Props) => {
  const iconMap: { [key: string]: IconType } = {
    //name:PlayStation
    //slug:playstation
    pc: FaWindows,
    playstaion: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    andriod: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };
  return (
    <HStack marginY={1}>
      {props.platform.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default PlatformIconsList;
