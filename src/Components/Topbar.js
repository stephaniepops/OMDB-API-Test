import React from "react";
import styled from "@emotion/styled/macro";
import { Link } from "react-router-dom";
import MyNominationsLink from "./MyNominationsLink";

const Logo = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;
`;

const TopbarContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px 17px;
  margin-bottom: 5px;
`;

const LinkContainer = styled.div`
  align-self: center;
`;

const Topbar = () => {
  return (
    <TopbarContainer>
      <Link to='/'>
        {" "}
        <Logo
          src={process.env.PUBLIC_URL + "logo.png"}
          alt='Favourite movie finder logo'
        />
      </Link>
      <LinkContainer>
        <MyNominationsLink />
      </LinkContainer>
    </TopbarContainer>
  );
};

export default Topbar;
