import React from "react";
import styled from "@emotion/styled";

interface IBlogCard {
  image: any;
  title: string;
  clue: string;
}

const BlogCard: React.FC<IBlogCard> = ({ image, title, clue }) => {
  return (
    <StyledCard>
      <img src={image} alt={title} />
      <div>
        <h4>{title}</h4>
        <p>{clue}</p>
      </div>
    </StyledCard>
  );
};

export default BlogCard;

const StyledCard = styled("div")`
  width: 100%;
  display: inline-block;
  overflow: hidden;
  background: white;
  border-radius: 4px;
  padding-bottom: 15px;
  margin: 0.5em;
  flex-basis: 270px;
  flex-shrink: 0;
  img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    object-position: center;
  }
  div {
    padding: 0 15px;
    h4 {
      font-size: 1.2rem;
      color: #323232;
      padding: 10px 0;
      text-decoration: underline;
    }
  }
`;
