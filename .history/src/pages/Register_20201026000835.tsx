import styled from '@emotion/styled';
import React from 'react';
import { StyledContainer } from './Home';

const Register: React.FC = () => {
  return (
    <StyledRegisterPage>
      <StyledContainer>
        <StyledRegister></StyledRegister>
      </StyledContainer>
    </StyledRegisterPage>
  );
};

export default Register;

const StyledRegister = styled('div')`
  max-width: 800px;
  min-height: 150px;
  border-radius: 4px;
  margin: 3em auto;
  background: #74747444;
`;
const StyledRegisterPage = styled('div')`
  height: 79vh;
`;
