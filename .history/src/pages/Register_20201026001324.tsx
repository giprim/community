import styled from '@emotion/styled';
import React from 'react';
import { StyledContainer } from './Home';

const Register: React.FC = () => {
  return (
    <StyledRegisterPage>
      <StyledContainer>
        <StyledRegister>
        <form>
          <div className='inputbox'>
            <label htmlFor='fullname'>Full name</label>
            <StyledInput
              required
              id='fullname'
              type='text'
              placeholder='John Doe Chukwu'
            />
          </div>
          <div className='inputbox'>
            <label htmlFor='email'>Email address</label>
            <StyledInput
              required
              id='email'
              type='email'
              placeholder='example@email.com'
            />
          </div>
          <div className='inputbox'>
            <input type='submit' value='SIGN UP' />
          </div>
        </form>
        </StyledRegister>
      </StyledContainer>
    </StyledRegisterPage>
  );
};

export default Register;

const StyledRegister = styled('div')`
  min-height: 150px;
  border-radius: 4px;
  margin: 3em auto;
  background: #74747444;
`;
const StyledRegisterPage = styled('div')`
  height: 85vh;
`;
