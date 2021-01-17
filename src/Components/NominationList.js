import React from "react";
import { REMOVE_NOMINATION } from "./MovieListItem";
import { useSelector } from "react-redux";
import { nominationsSelector } from "../reducers/nominations";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AnimatedList from "./AnimatedList";

const NominationList = () => {
  const nominationsData = useSelector(nominationsSelector);

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
        {nominationsData && (
          <AnimatedList
            movieListData={nominationsData}
            variant={REMOVE_NOMINATION}
          />
        )}
      </div>
    </div>
  );
};

export default NominationList;
