import React, { useEffect } from "react";
import { Badge } from "@chakra-ui/react";
import FilmStripIcon from "./FilmStripIcon";
import styled from "@emotion/styled/macro";
import { useSelector } from "react-redux";
import { nominationsSelector } from "../reducers/nominations";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

const Motion = styled(motion.div)`
  position: absolute;
  top: -13px;
  right: -6px;
`;
const LinkContainer = styled.div`
  position: relative;
`;

const MyNominationsLink = () => {
  const nominationsData = useSelector(nominationsSelector);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scale: [0.75, 1.2, 1],
    });
  }, [controls, nominationsData.length]);

  return (
    <LinkContainer>
      <Link to='/nominations'>
        <FilmStripIcon />
        <Motion animate={controls} transition={{ duration: 0.5 }}>
          <Badge colorScheme='green' borderRadius='lg'>
            {nominationsData.length}
          </Badge>
        </Motion>
      </Link>
    </LinkContainer>
  );
};

export default MyNominationsLink;
