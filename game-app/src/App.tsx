import { Button, ButtonGroup, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";
import NavBar from "./components/NavBar";
import PlatfornSelector from "./components/PlatfornSelector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGeneres";
function App() {
  const [selectGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectPlatform, setSelectedPlatform] = useState<Platform | null>(null);
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //device larger than 1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside" paddingX={5}>
            <GenereList
              selectedGenre={selectGenre}
              onSelectGenre={(gener) => setSelectedGenre(gener)}
            />
          </GridItem>
        </Show>
        <GridItem area="main">
          <PlatfornSelector
            selectedPlatform={selectPlatform}
            onSelectPlatform={(platform) => setSelectedPlatform(platform)}
          />
          <GameGrid
            selectedPlatform={selectPlatform}
            selectedGenre={selectGenre}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
