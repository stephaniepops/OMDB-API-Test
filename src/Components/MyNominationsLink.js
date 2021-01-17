import React from "react";
import { Badge } from "@chakra-ui/react";
import FilmStripIcon from "./FilmStripIcon";
import styled from "@emotion/styled/macro";
import { useSelector } from "react-redux";
import { nominationsSelector } from "../reducers/nominations";
import { Link } from "react-router-dom";

const LinkContainer = styled.div`
  position: relative;
`;

const MyNominationsLink = () => {
  const nominationsData = useSelector(nominationsSelector);

  return (
    <LinkContainer>
      <Link to='/nominations'>
        <FilmStripIcon />
        <Badge
          colorScheme='green'
          borderRadius='lg'
          position='absolute'
          top='-8px'
          right='-7px'
        >
          {nominationsData.length}
        </Badge>
      </Link>
    </LinkContainer>
  );
};

export default MyNominationsLink;
