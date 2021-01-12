import React from "react";
import { ChakraProvider, Box, Image, Text, IconButton } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import styled from "@emotion/styled";

//styled components for additional styles
const MovieTitle = styled.div`
  white-space: nowrap;
  margin: 15px;
`;
const Year = styled.div`
  white-space: nowrap;
  margin: 15px;
`;

const MovieListItem = ({ title, year, posterURL }) => (
  <ChakraProvider resetCSS>
    <Box
      display='flex'
      textAlign='left'
      justifyContent='flex-start'
      backgroundColor='gray.500'
    >
      <Image width='50px' src={posterURL} opacity={1} borderRadius='sm' />
      <Box display='flex' flexDirection='row' alignItems='center'>
        <Box display='flex'>
          <MovieTitle>{title}</MovieTitle>
          <Year>({year})</Year>
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
        <IconButton
          aria-label='icon'
          icon={<StarIcon />}
          size='lg'
          variant='link'
          colorScheme='whiteAlpha'
          color='whiteAlpha.900'
          backgroundColor='teal.500'
          isRound
          opacity={0.67}
        />
      </Box>
    </Box>
  </ChakraProvider>
);

export default MovieListItem;
