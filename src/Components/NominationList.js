import React, { useEffect } from "react";
import MovieListItem, { REMOVE_NOMINATION } from "./MovieListItem";
import { useSelector } from "react-redux";
import { nominationsSelector } from "../reducers/nominations";
import styled from "@emotion/styled/macro";

const Title = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  color: #1a202c;
  font-size: 1.5em;
  font-weight: 450;
  margin: 15px 15px 15px 15px;
`;

const NominationList = () => {
  const nominationsData = useSelector(nominationsSelector);

  useEffect(() => {
    console.log("Nominations Data", nominationsData);
  }, [nominationsData]);
  return (
    <div>
      <Title>My Nominations</Title>
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
