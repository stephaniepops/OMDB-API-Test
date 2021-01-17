import React from "react";
import { Box, Image, IconButton, Divider, Text } from "@chakra-ui/react";
import { DeleteIcon, StarIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import { addNomination, removeNomination } from "../actions/nomination";
import { nominationsSelector } from "../reducers/nominations";
//styled components for additional styles
const MovieTitle = styled.div`
  margin-right: 10px;
  margin-left: 30px;
  font-weight: bold;
`;

export const REMOVE_NOMINATION = "REMOVE_NOMINATION";
export const ADD_NOMINATION = "ADD_NOMINATION";

const MovieListItem = ({ movie, variant }) => {
  const { Title, Year, Poster, imdbID } = movie;

  const dispatch = useDispatch();
  const nominationList = useSelector(nominationsSelector);

  const addFavourite = () => {
    if (nominationList.length >= 5) {
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
      >
        <Image
          width='75px'
          src={
            Poster === "N/A" ? "https://via.placeholder.com/300x450" : Poster
          }
          opacity={1}
          borderRadius='sm'
        />
        <Box display='flex' flexWrap='wrap'>
          <MovieTitle>
            {Title}
            <Text fontWeight='400' display='inline'>
              {" "}
              ({Year})
            </Text>
          </MovieTitle>
        </Box>
        <Box marginLeft='auto'>
          <IconButton
            onClick={handleClick}
            aria-label='icon'
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
            _disabled={{ cursor: "default", opacity: 0.4, boxShadow: "none" }}
          />
        </Box>
      </Box>
    </>
  );
};

export default MovieListItem;
