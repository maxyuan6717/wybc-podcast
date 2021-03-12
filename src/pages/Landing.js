import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";

const StyledContainer = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
`;

const StyledTitle = styled.div`
  color: #b4ceff;
  text-shadow: -0.0075em 0.0075em 0 #e6f3ff, 0.005em 0.005em 0 #80b0ff,
    0.01em 0.01em 0 #85b3ff, 0.015em 0.015em #87b4ff, 0.02em 0.02em 0 #8cb6ff,
    0.025em 0.025em 0 #90b9ff, 0.03em 0.03em 0 #95bbff,
    0.035em 0.035em 0 #99beff;

  font-family: tomarik-display, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: calc(1em + 8vw);
`;

const StyledSubTitle = styled.div`
  color: #80b0ff;

  font-size: calc(1em + 1vw);
  font-family: tomarik-display, sans-serif;
  font-weight: 400;
  font-style: italic;
`;

const Landing = () => {
  return (
    <StyledContainer>
      <div className="m-auto">
        <Row className="mx-auto justify-content-center">
          <StyledTitle>Pass the Mic!</StyledTitle>
        </Row>
        <Row className="mx-auto justify-content-end">
          <StyledSubTitle>A WYBC Podcast</StyledSubTitle>
        </Row>
      </div>
    </StyledContainer>
  );
};

export default Landing;
