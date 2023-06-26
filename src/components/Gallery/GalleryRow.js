import React from "react";
import GalleryCol from "./GalleryCol";
import styled from "styled-components";
const GalleryRow = () => {
  const RowGallery = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    ${'' /* align-items: flex-start; */}
    ${'' /* flex-wrap: wrap; */}
  `;
  return (
    <>
      <RowGallery>
        <GalleryCol />
        <GalleryCol />
        <GalleryCol />
      </RowGallery>
    </>
  );
};
export default GalleryRow;
