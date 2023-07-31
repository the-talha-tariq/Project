import React from "react";
import useGeneres from "../hooks/useGeneres";

const GenereList = () => {
  const { geners } = useGeneres();
  return (
    <ul>
      {geners.map((gener) => (
        <li key={gener.id}>{gener.name}</li>
      ))}
    </ul>
  );
};

export default GenereList;
