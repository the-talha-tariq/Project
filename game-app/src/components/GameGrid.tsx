import { Box, Center, SimpleGrid, Text } from "@chakra-ui/react";
import useGames, { Platform } from "../hooks/useGames";
import { Genre } from "../hooks/useGeneres";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  selectedGenre: Genre | null;
  selectedPlatform: Platform | null;
}

const GameGrid = (props: Props) => {
  const { data, error, isLoading } = useGames(
    props.selectedGenre,
    props.selectedPlatform
  );
  const sekeleton = [1, 2, 3, 4, 5, 6];

  return (
    <Box mx="auto" width="fit-content" paddingLeft={15} paddingRight={5}>
      {/* {error && <Text>{error}</Text>} */}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {isLoading &&
          sekeleton.map((sekeleton) => (
            <GameCardSkeleton key={sekeleton}></GameCardSkeleton>
          ))}
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default GameGrid;
