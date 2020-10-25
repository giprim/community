import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { StyledContainer } from '../App';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <div className='flex'>
          <ul>
            <li>
              <Link to='/about'>about</Link>
            </li>
            <li>
              <Link to='/about'>about</Link>
            </li>
            <li>
              <Link to='/about'>about</Link>
            </li>
          </ul>
        </div>
      </StyledContainer>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled('div')`
  background: black;
`;
