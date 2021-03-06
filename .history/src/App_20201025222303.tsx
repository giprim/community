import styled from "@emotion/styled";
import React from "react";
import "./App.css";
import Banner from "./components/Banner";
import BlogCard from "./components/BlogCard";
import Navbar from "./components/Navbar";
import Programs from "./components/Programs";
import whiteBg from "./images/whitebg.svg";

import startHtml from "./images/starthtml.png";
import cssgrid from "./images/cssgrid.png";
import flexbox from "./images/flexbox.png";
import { Link } from "react-router-dom";
import { ChevronRight } from "react-feather";

let text = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis esse vel labore id autem ducimus!`;

let data = [
  {
    title: "Getting started with HTML",
    image: startHtml,
    text: text,
  },
  {
    title: "Understanding CSS Grid",
    image: cssgrid,
    text: text,
  },
  {
    title: "CSS Grid vs Flexbox",
    image: flexbox,
    text: text,
  },
];

function App() {
  return (
    <StyledFluidContainer>
      <StyledContainer>
        <Navbar />
        <Banner />
      </StyledContainer>
      <div className='whitebg'>
        <StyledContainer id='program'>
          <Programs />
        </StyledContainer>
      </div>

      <StyledContainer>
        <StyledTrending>
          <h4>Trending</h4>

          <Link to='/blog'>
            <span>More blogs</span> <ChevronRight />
          </Link>
        </StyledTrending>
        <StyledBlogGrid>
          {data.map(({ title, image, text }) => (
            <BlogCard key={title} image={image} clue={text} title={title} />
          ))}
        </StyledBlogGrid>
      </StyledContainer>
    </StyledFluidContainer>
  );
}

export default App;

export const StyledContainer = styled("div")<{ onPadding?: boolean }>`
  margin: 0 auto;
  max-width: 380px;
  padding: ${({ onPadding }) => (onPadding ? "0px" : "15px")};
  @media (min-width: 700px) {
    max-width: 520px;
  }
  @media (min-width: 1000px) {
    max-width: 1050px;
  }
`;

const StyledFluidContainer = styled("div")`
  width: 100%;

  .whitebg {
    background: url(${whiteBg}) no-repeat;
    background-size: cover;
    padding: 9em 0;
  }
`;

const StyledBlogGrid = styled("div")`
  padding: 2em 0em;
  overflow-x: auto;
  display: flex;
  flex-direction: row;
`;

const StyledTrending = styled("div")`
  padding-top: 3em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  * {
    color: #fff;
  }

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    :hover {
      text-decoration: underline;
    }
  }
`;
