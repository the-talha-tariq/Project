import { Heading } from "@chakra-ui/react";
import React from "react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = (props: Props) => {
  const heading = `${props.gameQuery.platform?.name || ""} ${
    props.gameQuery.genre?.name || ""
  } Games`;
  return <Heading as="h1">{heading}</Heading>;
};

export default GameHeading;
