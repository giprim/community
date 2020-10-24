import styled from "@emotion/styled";
import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import Programs from "./components/Programs";
import whiteBg from "./images/whitebg.svg";
function App() {
  return (
    <StyledFluidContainer>
      <Banner />
      <div className='whitebg'>
        <StyledContainer>
          <Programs />
        </StyledContainer>
      </div>
    </StyledFluidContainer>
  );
}

export default App;

export const StyledContainer = styled("div")<{ onPadding?: boolean }>`
  margin: 0 auto;
  max-width: 380px;
  padding: ${({ onPadding }) => (onPadding ? "0px" : "15px")};
  @media (min-width: 700px) {
    max-width: 520px;
  }
  @media (min-width: 1000px) {
    max-width: 1050px;
  }
`;

const StyledFluidContainer = styled("div")`
  width: 100%;

  .whitebg {
    background: url(${whiteBg}) no-repeat;
    background-size: cover;
    padding-top: 6rem;
    padding-bottom: 6rem;
  }
`;
