import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { GiMicrophone } from "react-icons/gi";
import { IoMailOutline, IoNewspaperOutline } from "react-icons/io5";

const StyledNavLink = styled.a`
  display: flex;
  padding: 15px;
  margin-right: 20px;
  font-size: 20px;

  color: #636363;
  transition: color 0.1s;

  &:hover {
    color: #363636;
    text-decoration: none;
  }
`;

const CustomNavbar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto">
          <StyledNavLink
            href="https://www.google.com/maps/place/21+Broadway,+New+Haven,+CT+06511/@41.3112892,-72.9319652,17.53z/data=!4m5!3m4!1s0x89e7d9b3c4c40a6f:0x8f4efc4cc4cf9b96!8m2!3d41.3111625!4d-72.9302885"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GoLocation
              className="my-auto mr-1"
              style={{ display: "inline-blok" }}
            />
            21 Broadway
          </StyledNavLink>
          <StyledNavLink style={{ pointerEvents: "none" }}>
            <GiMicrophone
              className="my-auto mr-1"
              style={{ display: "inline-blok" }}
            />
            Coming Soon
          </StyledNavLink>
          <StyledNavLink href="mailto:pod@wybc.com">
            <IoMailOutline
              className="my-auto mr-1"
              style={{ display: "inline-blok" }}
            />
            pod@wybc.com
          </StyledNavLink>
          <StyledNavLink
            href="https://tinyletter.com/podcastdept"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoNewspaperOutline
              className="my-auto mr-1"
              style={{ display: "inline-blok" }}
            />
            Subscribe to the Newsletter
          </StyledNavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CustomNavbar;
