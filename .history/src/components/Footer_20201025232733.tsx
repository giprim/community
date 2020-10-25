import styled from '@emotion/styled';
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'react-feather';
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

          <div className='socials'>
              <a href="#" target="_blank"><Twitter/></a>
              <a href="#" target="_blank"><Facebook/></a>
              <a href="#" target="_blank"><Instagram/></a>
              <a href="#" target="_blank"><Linkedin/></a>
          </div>
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
      padding-bottom: 0.7rem;
    }
  }

  a {
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }

  .socials{
      a{
          display
      }
  }
`;
