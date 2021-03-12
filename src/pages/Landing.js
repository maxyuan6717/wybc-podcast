import React from "react";
import styled from "styled-components";
import { Row } from "react-bootstrap";

const StyledContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 76px);
  min-width: 100vw;
`;

const StyledTitle = styled.div`
  color: #e3837a;
  text-shadow: -0.0075em 0.0075em 0 #c73030, 0.005em 0.005em 0 #eebbb8,
    0.01em 0.01em 0 #f0c3c0, 0.015em 0.015em #f2cbc8, 0.02em 0.02em 0 #f3d2d0,
    0.025em 0.025em 0 #f5d9d7, 0.03em 0.03em 0 #f7e0de,
    0.035em 0.035em 0 #f8e6e5;

  font-family: tomarik-display-line, sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: calc(1em + 7vw);
  text-align: center;
`;

const StyledSubTitle = styled.div`
  color: #eebbb8;

  font-size: calc(1em + 1vw);
  font-family: tomarik-display-line, sans-serif;
  font-weight: 400;
  font-style: italic;
`;

const Landing = () => {
  return (
    <StyledContainer>
      <div className="m-auto p-2">
        <Row className="mx-auto justify-content-center">
          <StyledTitle>Pass the Mic!</StyledTitle>
        </Row>
        <Row className="mx-auto justify-content-end mb-5">
          <StyledSubTitle>A WYBC Podcast</StyledSubTitle>
        </Row>
      </div>
    </StyledContainer>
  );
};

export default Landing;

// color: #b4ceff;
// text-shadow: -0.0075em 0.0075em 0 #e6f3ff, 0.005em 0.005em 0 #80b0ff,
//   0.01em 0.01em 0 #85b3ff, 0.015em 0.015em #87b4ff, 0.02em 0.02em 0 #8cb6ff,
//   0.025em 0.025em 0 #90b9ff, 0.03em 0.03em 0 #95bbff,
//   0.035em 0.035em 0 #99beff;
