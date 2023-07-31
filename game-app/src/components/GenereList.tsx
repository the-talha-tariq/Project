import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGeneres, { Genre } from "../hooks/useGeneres";
import getCroppedImageUrl from "../services/image-url";

const GenereList = () => {
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
            <Text fontSize="lg">{gener.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenereList;
