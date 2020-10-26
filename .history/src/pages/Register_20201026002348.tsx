import styled from '@emotion/styled';
import React from 'react';
import StyledInput from '../styledComponents/Input';
import { StyledContainer } from './Home';

const Register: React.FC = () => {
  return (
    <StyledRegisterPage>
      <StyledContainer>
        <StyledRegister>
          <form>
            <div className='formBox'>
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
                <label htmlFor='email'>Email address</label>
                <StyledInput
                  required
                  id='email'
                  type='email'
                  placeholder='example@email.com'
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
            </div>
            <input type='submit' value='SIGN UP' />
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
  padding: 1em;

  .formBox {
    display: flex;
    flex-wrap: wrap;
    justify
  }
  .inputbox {
    margin: 2rem auto;
    max-width: 340px;
    min-width: 280px;

    label,
    input[type='submit'] {
      display: block;
      color: #fff;
      width: 100%;
    }

    input[type='submit'] {
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
  }
`;

const StyledRegisterPage = styled('div')`
  height: 85vh;
`;
