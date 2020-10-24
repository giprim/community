import styled from "@emotion/styled";
import React from "react";
import "./App.css";
import Banner from "./components/Banner";

function App() {
  return (
    <StyledFluidContainer>
      <StyledContainer>
        <Banner />
      </StyledContainer>
    </StyledFluidContainer>
  );
}

export default App;

const StyledContainer = styled("div")`
  margin: 0 auto;
  max-width: 380px;
  @media (min-width: 700px) {
    max-width: 520px;
  }
  @media (min-width: 1000px) {
    max-width: 1050px;
  }
`;

const StyledFluidContainer = styled("div")`
  width: 100%;
`;
