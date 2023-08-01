import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGeneres, { Genre } from "../hooks/useGeneres";
import getCroppedImageUrl from "../services/image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenereList = (props: Props) => {
  const { data, isLoading, error } = useGeneres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((gener) => (
        <ListItem key={gener.id} paddingY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(gener.image_background)}
            />
            <Button
              fontWeight={
                gener.id == props.selectedGenre?.id ? "bold" : "normal"
              }
              onClick={() => props.onSelectGenre(gener)}
              fontSize="lg"
              variant="link"
            >
              {gener.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenereList;
