import styled from "@emotion/styled";
import React from "react";
import { StyledContainer } from "./Home";

const About: React.FC = () => {
  return (
    <StyledAbout>
      <StyledContainer>
        <div>
          <h1>About us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum est
            repudiandae impedit, deserunt odit laboriosam qui, quos a rem totam
            ullam! Possimus voluptates esse dolor cum numquam officia quisquam
            expedita!
          </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            quasi tenetur, a facilis sed odit minima ipsum iste voluptates
            laborum ratione, neque magni minus itaque consectetur earum quos
            aspernatur culpa?
          </p>
        </div>
      </StyledContainer>
    </StyledAbout>
  );
};

export default About;

const StyledAbout = styled("div")`
  background: #fff;
  padding: 15px;
  min-height: 75vh;
  color: #333;
  div {
    padding: 5% 0%;
    max-width: 700px;
  }
  h1 {
    margin-bottom: 1em;
  }
`;
