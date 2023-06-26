import React from "react";
import styled from "styled-components";
const PostCard = ({ post, onclick }) => {
  const PostDiv = styled.div`
    width: 300px;
    height: 300px;
    max-width: auto;
    padding: 18px;
    margin: 15px;
  `;
  const handleClick = () => {
    onclick();
  };
  return (
    <>
      <PostDiv onclick={handleClick}>
        <p>{post.title}</p>
        <p>{post.body}</p>
      </PostDiv>
    </>
  );
};
export default PostCard;
