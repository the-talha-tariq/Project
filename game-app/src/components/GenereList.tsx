import useGeneres, { Genre } from "../hooks/useGeneres";

const GenereList = () => {
  const { data } = useGeneres();
  return (
    <ul>
      {data.map((gener) => (
        <li key={gener.id}>{gener.name}</li>
      ))}
    </ul>
  );
};

export default GenereList;
