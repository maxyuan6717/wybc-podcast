import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";

const StyledText = styled.div`
  font-size: 25px;
  margin: 20px;
  opacity: 40%;
`;

const Footer = () => {
  return (
    <Row className="mx-auto justify-content-center">
      <StyledText>Coming soon to wherever you get your podcasts!</StyledText>
    </Row>
  );
};

export default Footer;
