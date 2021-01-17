import React, { useState } from "react";
import { Box, Image, IconButton, Divider } from "@chakra-ui/react";
import { DeleteIcon, StarIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { addNomination, removeNomination } from "../actions/nomination";
import { nominationsSelector } from "../reducers/nominations";
//styled components for additional styles
const MovieTitle = styled.div`
  white-space: nowrap;
  margin-right: 10px;
  margin-left: 30px;
  font-weight: bold;
`;
const YearContainer = styled.div`
  white-space: nowrap;
`;
export const REMOVE_NOMINATION = "REMOVE_NOMINATION";
export const ADD_NOMINATION = "ADD_NOMINATION";

const MovieListItem = ({ movie, variant }) => {
  const { Title, Year, Poster, imdbID, Type } = movie;

  const dispatch = useDispatch();
  const nominationList = useSelector(nominationsSelector);

  const addFavourite = () => {
    if (nominationList.length >= 5) {
      console.log("List is full!");
      return;
    }
    if (
      !nominationList.some((nominatedMovie) => nominatedMovie.imdbID === imdbID)
    ) {
      dispatch(addNomination(movie));
    }
  };

  const removeFavourite = () => {
    dispatch(removeNomination(imdbID));
  };

  const handleClick = () => {
    switch (variant) {
      case ADD_NOMINATION:
        addFavourite();
        break;
      case REMOVE_NOMINATION:
        removeFavourite();
        break;
      default:
        break;
    }
  };

  const getIcon = () => {
    switch (variant) {
      case ADD_NOMINATION:
        return <StarIcon />;
      case REMOVE_NOMINATION:
        return <DeleteIcon />;
      default:
        break;
    }
  };

  return (
    <>
      <Divider />
      <Box
        display='flex'
        textAlign='left'
        justifyContent='flex-start'
        margin='10px'
        minWidth='300px'
        maxWidth='800px'
        width='100vw'
      >
        <Image width='75px' src={Poster} opacity={1} borderRadius='sm' />
        <Box display='flex' flexDirection='row' alignItems='center'>
          <Box display='flex'>
            <MovieTitle>{Title}</MovieTitle>
            <YearContainer>({Year})</YearContainer>
          </Box>
        </Box>
        <Box
          textAlign='left'
          display='flex'
          justifyContent='flex-end'
          flexDirection='row'
          alignItems='center'
          width='100%'
        >
          <IconButton
            onClick={handleClick}
            aria-label='icon'
            //TODO react-icons empty star
            icon={getIcon()}
            size='lg'
            variant='ghost'
            isRound
            color='black'
            opacity={0.67}
            isDisabled={
              nominationList.some(
                (nominatedMovie) => nominatedMovie.imdbID === imdbID
              ) && variant === ADD_NOMINATION
            }
          />
        </Box>
      </Box>
    </>
  );
};

export default MovieListItem;
