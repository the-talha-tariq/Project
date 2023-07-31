import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Game } from "../hooks/useGames";
import CricticScore from "./CricticScore";
import PlatformIconsList from "./PlatformIconsList";

interface Props {
  game: Game;
}
const GameCard = (props: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={props.game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{props.game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconsList
            platform={props.game.parent_platforms.map((p) => p.platform)}
          />
          <CricticScore score={props.game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
