import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { StyledContainer } from '../App';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <div className='flex'>
          <ul>
            <li>
              <Link to='/blog'>blog</Link>
            </li>
            <li>
              <Link to='/about'>about</Link>
            </li>
            <li>
              <HashLink to='/#program'>programs</HashLink>
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
  padding: 2em 0;
  * {
    color: white;
  }

.flex{
    display: flex;
    justify-content: safe;
}
  ul {
    list-style: none;
    li {
      padding-top: 0.7rem;
    }
  }

  a {
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;
