import React, { useEffect } from "react";
import MovieListItem, { REMOVE_NOMINATION } from "./MovieListItem";
import { useSelector } from "react-redux";
import { nominationsSelector } from "../reducers/nominations";

const NominationList = () => {
  const nominationsData = useSelector(nominationsSelector);

  useEffect(() => {
    console.log("Nominations Data", nominationsData);
  }, [nominationsData]);
  return (
    <div>
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
