import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Post from "../post/PostAnother";
import PostAnother from "../post/PostAnother";
const AccordionContainer = ({ accordion, index }) => {
  const [activeAcc, setIsActiveAcc] = useState(false);
  function handleClick(event) {
    event.preventDefault();
    setIsActiveAcc(!activeAcc);
  }
  const Div = styled.div`
    width: 100%;
    height: auto;
    background-color: gray;
    color: black;
    padding: 20px;
    transition: all 0.4s linear;
  `;
  const [error, setError] = useState(false);
  const [postData, setPostData] = useState([]);
  // fetch using java script fetch method
  let url = "https://jsonplaceholder.typicode.com/posts";
  useEffect(() => {
    fetch(url).then((response) => {
      response
        .json()
        .then((data) => {
          console.log(data);
          setPostData(data);
        })
        .catch((err) => setError(err));
    });
  }, []);
  return (
    <>
      <Div>
        <div onClick={handleClick} style={{ cursor: "pointer" }}>
          <p>{accordion.accQue}</p>
        </div>
        {activeAcc && (
          <div>
            <p>{accordion.answer}</p>
            <div>{postData && <PostAnother posts={postData} />}</div>
          </div>
        )}
        {error}
      </Div>
    </>
  );
};
export default AccordionContainer;
