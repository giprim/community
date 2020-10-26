import styled from "@emotion/styled";
import React, { useState } from "react";
import InputComp from "../components/Input";
import StyledInput from "../styledComponents/Input";
import { StyledContainer } from "./Home";

const registerModel = {
  name: "",
  email: "",
  state: "",
  city: "",
  educationLevel: "",
  availableLearningTime: "",
  whyJoinUs: "",
  stack: "",
  previousTeckKnowledge: "",
  otherNeccessaryInfo: "",
};

const Register: React.FC = () => {
  const [registerdetails, setRegisterDetails] = useState(registerModel);
  console.log(registerdetails);
  return (
    <StyledRegisterPage>
      <StyledContainer>
        <StyledRegister>
          <div className='caption'>
            <h2>Join us</h2>

            <p>
              We are excited to have yon in the coummunity. <br />
              Please, register below.
            </p>
          </div>
          <form>
            <div className='formBox'>
              <InputComp
                state={registerdetails}
                setState={setRegisterDetails}
                label='name'
                placeholder='Full name'
              />
              <InputComp
                state={registerdetails}
                setState={setRegisterDetails}
                label='email'
                placeholder='Email address'
              />
              <InputComp
                state={registerdetails}
                setState={setRegisterDetails}
                label='state'
                placeholder='State'
              />
              <InputComp
                state={registerdetails}
                setState={setRegisterDetails}
                label='city'
                placeholder='City'
              />
              <InputComp
                state={registerdetails}
                setState={setRegisterDetails}
                label='educationLevel'
                placeholder='Education level'
              />
              <InputComp
                state={registerdetails}
                setState={setRegisterDetails}
                label='availableLearningTime'
                placeholder='Preferred time for learning?'
              />
              <InputComp
                state={registerdetails}
                setState={setRegisterDetails}
                label='whyJoinUs'
                placeholder='Tell us why you want to join?'
              />
              <InputComp
                state={registerdetails}
                setState={setRegisterDetails}
                label='stack'
                placeholder='Stack'
              />
              <InputComp
                state={registerdetails}
                setState={setRegisterDetails}
                label='previousTeckKnowledge'
                placeholder='What Technologies have you used?'
              />
              <InputComp
                state={registerdetails}
                setState={setRegisterDetails}
                label='otherNeccessaryInfo'
                placeholder={`Something you'd like to tell us?`}
              />
            </div>
            <input type='submit' className='submit' value='SIGN UP' />
          </form>
        </StyledRegister>
      </StyledContainer>
    </StyledRegisterPage>
  );
};

export default Register;

const StyledRegister = styled("div")`
  min-height: 150px;
  border-radius: 4px;
  margin: 0 auto;
  background: #74747444;
  padding: 1em;
  .caption {
    text-align: left;
    padding: 1.5em 0.33em;
    color: #fff;
    h2 {
      font-size: 2.5em;
      margin-bottom: 10px;
    }
  }
  @media (min-width: 768px) {
    margin: 3em auto;
    .caption {
      text-align: center;
    }
  }
  .formBox {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-evenly;
  }
  .submit {
    padding: 0.6em 1em;
    display: block;
    color: white;
    font-weight: bold;
    letter-spacing: 2px;
    width: 41%;
    min-width: 280px;
    margin: 0.5em auto;
    background: linear-gradient(
      93.1deg,
      #30134e 21%,
      #a30d83 59.35%,
      #f12acc 98.27%
    );
    border-radius: 4px;
    transition: 0.273s ease-in;
    border: none;
    :hover {
      background: #30134e;
    }
  }
`;

const StyledRegisterPage = styled("div")``;
