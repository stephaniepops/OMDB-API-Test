import React, { useState } from "react";
import { Box, Image, IconButton } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { addNomination, removeNomination } from "../actions/nomination";
import { nominationsSelector } from "../reducers/nominations";
//styled components for additional styles
const MovieTitle = styled.div`
  white-space: nowrap;
  margin: 15px;
`;
const YearContainer = styled.div`
  white-space: nowrap;
  margin: 15px;
`;
export const REMOVE_NOMINATION = "REMOVE_NOMINATION";
export const ADD_NOMINATION = "ADD_NOMINATION";

const MovieListItem = ({ movie, variant }) => {
  const { Title, Year, Poster, imdbID, Type } = movie;
  const [isDisabled, setIsDisabled] = useState(false);

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
      setIsDisabled(true);
    }
  };

  const removeFavourite = () => {
    dispatch(removeNomination(imdbID));
  };

  return (
    <Box
      display='flex'
      textAlign='left'
      justifyContent='flex-start'
      backgroundColor='gray.500'
    >
      <Image width='50px' src={Poster} opacity={1} borderRadius='sm' />
      <Box display='flex' flexDirection='row' alignItems='center'>
        <Box display='flex'>
          <MovieTitle>{Title}</MovieTitle>
          <YearContainer>{Year}</YearContainer>
        </Box>
      </Box>
      <Box
        textAlign='left'
        display='flex'
        justifyContent='flex-end'
        flexDirection='row'
        alignItems='center'
        width='100%'
        margin='15px'
      >
        {variant === ADD_NOMINATION && (
          <IconButton
            onClick={() => {
              addFavourite();
            }}
            aria-label='icon'
            icon={<StarIcon />}
            size='lg'
            variant='link'
            colorScheme='whiteAlpha'
            color='whiteAlpha.900'
            backgroundColor='teal.500'
            isRound
            opacity={0.67}
            isDisabled={isDisabled}
          />
        )}
        {variant === REMOVE_NOMINATION && (
          <IconButton
            onClick={() => {
              removeFavourite();
            }}
            aria-label='icon'
            size='lg'
            variant='link'
            colorScheme='whiteAlpha'
            color='whiteAlpha.900'
            icon={<StarIcon />}
            backgroundColor='teal.500'
            isRound
            opacity={0.67}
            isDisabled={isDisabled}
          />
        )}
      </Box>
    </Box>
  );
};

export default MovieListItem;
