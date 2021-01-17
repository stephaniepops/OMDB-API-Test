import React from "react";
import { REMOVE_NOMINATION } from "./MovieListItem";
import { useSelector } from "react-redux";
import { nominationsSelector } from "../reducers/nominations";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AnimatedList from "./AnimatedList";
import styled from "@emotion/styled/macro";

const NominationListContainer = styled.div`
  max-width: 820px;
  width: 100%;
`;
const NominationList = () => {
  const nominationsData = useSelector(nominationsSelector);

  return (
    <NominationListContainer>
      {nominationsData.length > 0 ? (
        <Text fontSize='1.75em' fontWeight='400'>
          My Nominations
        </Text>
      ) : (
        <Text
          fontSize='1.5em'
          fontWeight='400'
          marginTop='50px'
          display='flex'
          flexDirection='column'
          alignItems='center'
        >
          <div> Nothing here 😭 </div>
          <div>
            Click{" "}
            <Link to='/'>
              <strong>Here</strong>
            </Link>{" "}
            to search for your favourite movies!
          </div>
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
    </NominationListContainer>
  );
};

export default NominationList;
