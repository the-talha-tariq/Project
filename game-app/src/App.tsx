import { Button, ButtonGroup, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import GameGrid from "./components/GameGrid";
import GenereList from "./components/GenereList";
import NavBar from "./components/NavBar";
function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`, //device larger than 1024px
        }}
      >
        <GridItem area="nav">
          <NavBar />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <GenereList />
          </GridItem>
        </Show>
        <GridItem area="main">
          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
