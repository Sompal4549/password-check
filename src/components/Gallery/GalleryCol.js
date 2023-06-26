import React from "react";
import ImageDiv from "./ImageDiv";
import styled from "styled-components";
const GalleryCol = ({}) => {
  const Column = styled.div`
    ${"" /* flex:1; */}
    ${"" /* flex-grow:1; */}
    display: block;
    flex-basis: 0;
    flex-grow: 1;
    flex-shrink: 1;
    ${'' /* width: 100%; */}
    min-width: 0;
    margin-right: 30px;
  `;
  return (
    <>
      <Column>
      {}
        <ImageDiv />
      </Column>
    </>
  );
};
export default GalleryCol;
