import React from "react";
import styled from "@emotion/styled";

const Programs: React.FC = () => {
  return (
    <StyledProgram>
      <h4>Programs</h4>

      <div className='flex'>
        <div>
          <h6>HTML</h6>
        </div>
        <div>
          <h6>CSS</h6>
        </div>
        <div>
          <h6>JavaScript</h6>
        </div>
        <div>
          <h6>Git</h6>
        </div>
      </div>
    </StyledProgram>
  );
};

export default Programs;

const StyledProgram = styled("div")`
  h4 {
    font-size: 1.4rem;
  }
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: safe;
    padding-top: 2em;
    div {
      font-size: 1.2rem;
      margin: 0.22em;
      width: 100%;
      max-width: 150px;
      display: flex;
      border: 1px #e5e5e5 solid;
      padding: 2em;
      border-radius: 4px;
      background: white;
      justify-content: center;
      align-items: center;
    }
  }
`;
