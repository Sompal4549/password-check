import React from "react";
import styled from "styled-components";
import PostCard from "./PostCard";

const PostAnother = ({ posts, onclick }) => {
  const Flex = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;
  `;
  console.log(posts, "posts");
  const handleClick = (id) => {
    onclick(id);
  };
  return (
    <>
      <div>
        post
        <Flex>
          {posts.map((post, id) => {
            return (
              <div onclick={() => handleClick(id)}>
                <PostCard post={post} />
              </div>
            );
          })}
        </Flex>
        {/* {posts} */}
      </div>
    </>
  );
};
export default PostAnother;
