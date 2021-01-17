import React, { useEffect } from "react";
import MovieListItem, { REMOVE_NOMINATION } from "./MovieListItem";
import { useSelector } from "react-redux";
import { nominationsSelector } from "../reducers/nominations";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NominationList = () => {
  const nominationsData = useSelector(nominationsSelector);

  useEffect(() => {
    console.log("Nominations Data", nominationsData);
  }, [nominationsData]);
  return (
    <div>
      {nominationsData.length > 0 ? (
        <Text fontSize='1.75em' fontWeight='400'>
          My Nominations
        </Text>
      ) : (
        <Text fontSize='1.5em' fontWeight='400'>
          Nothing here :( Click <Link to='/'>here</Link> to search for your
          favourite movies!
        </Text>
      )}

      <div>
        {nominationsData &&
          nominationsData.map((movie, index) => (
            <MovieListItem
              key={index}
              movie={movie}
              variant={REMOVE_NOMINATION}
            />
          ))}
      </div>
    </div>
  );
};

export default NominationList;
