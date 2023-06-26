import React from "react";
import styled,{css} from "styled-components";
const ImageDiv = ({ img }) => {
  const Figure = styled.figure`
    position: relative;
    width: 100%;
    height: auto;
    min-width: 300px;
    margin-right: 30px;
  `;
  const Div = styled.div`
    width: 100%;
    height: auto;
    ${(props) =>
      props.$primary &&
      css`
        background: palevioletred;
        color: red;
      `}
  `;

  return (
    <Div>
      <Figure>
        <img
          src="https://www.w3schools.com/tags/pic_trulli.jpg"
          alt="trulli"
          width={300}
          height={300}
        />
        <figcaption>Image</figcaption>
      </Figure>
    </Div>
  );
};
export default ImageDiv;
