import React, { useState } from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Menu } from "react-feather";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  return (
    
    <StyledNav>

      <NavLink to='/'>
        <Logo>
          La<span>tech</span>com
        </Logo>
      </NavLink>

      <MenuButton onClick={() => setVisible((prev) => !prev)}>
        <Menu />
      </MenuButton>
      <LinkSection show={visible}>
        <li>
          <NavLink to='/blog'>blog</NavLink>
        </li>
        <li>
          <HashLink to='/#program'>program</HashLink>
        </li>
        <li>
          <NavLink to='/about'>about</NavLink>
        </li>
        <li>
          <NavLink to='/signup'>join us</NavLink>
        </li>
      </LinkSection>
    </StyledNav>
  );
};

export default Navbar;

const StyledNav = styled("div")`
  font-size: 0.8rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1rem;
  vertical-align: middle;
  div {
    height: 100%;
  }
  a {
    text-decoration: none;
  }
`;

const Logo = styled("h3")`
  font-size: 1.2em;
  padding: 15px 0;
  color: white;
  span {
    color: purple;
  }
`;

const LinkSection = styled("ul")<any>`
  display: ${(props) => (props.show ? "block" : "none")};
  width: 100%;
  margin-top: 15px;
  transition: 0.23s linear;
  li {
    list-style: none;
    a {
      background: #840084;
      text-decoration: none;
      display: block;
      text-align: center;
      padding: 10px 5px;
      color: white;
      font-weight: 600;
      transition: 0.23s ease-out;
      :hover {
        background: #520052;
      }
    }
    :last-child {
      a {
        background: #ffffff;
        color: #840084;
        :hover {
          background: #ffffff99;
        }
      }
    }
  }
  @media (min-width: 834px) {
    display: inline-flex;
    width: auto;
    margin-top: 8px;
    li {
      a {
        background: #ffffff00;
        padding: 10px 15px;
        border-radius: 4px;
        margin: 0 3px;
        :hover {
          background: #840084;
        }
      }
    }
  }
`;

const MenuButton = styled("button")`
  display: none;
  border: none;
  border: 1px #ffffff55 solid;
  border-radius: 4px;
  background: #ffffff00;
  color: white;
  font-size: 1.1em;
  margin-top: 10px;
  padding: 5px 15px;
  line-height: 100%;
  transition: 0.23s ease-out;
  @media (max-width: 834px) {
    display: inline;
    :hover {
      background: #ffffffaa;
    }
  }
`;
