import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const StyledContainer = styled.div`
  display: flex;
  min-height: 100vh;
  min-width: 100vw;
  padding: 20px 4vw;
`;

const StyledTitle = styled.div`
  font-size: calc(1em + 3vw);
  font-weight: 600;
  max-width: 500px;
  margin: auto;
  text-align: center;
`;

const StyledDescription = styled.div`
  font-size: calc(1em + 1vw);
  margin: auto;
`;

const Info = () => {
  return (
    <StyledContainer>
      <Row className="mx-auto">
        <Col md={8} className="d-flex">
          <StyledTitle>
            Pass the Mic! <br />A Brief Audio History of Yale Radio's Past and
            Present
          </StyledTitle>
        </Col>
        <Col md={4} className="d-flex">
          <StyledDescription>
            The WYBC Podcast is a student-made anthology series devoted to the
            interests and curiosities of the Yale radio community. Each season
            will focus on a different subject or idea that interests WYBCx
            members. Season 1 (“Pass the Mic”) will explore the past and present
            of Yale radio through five distinct angles. Each episode will focus
            on a different pocket of WYBC as an institution and community.
          </StyledDescription>
        </Col>
      </Row>
    </StyledContainer>
  );
};

export default Info;
