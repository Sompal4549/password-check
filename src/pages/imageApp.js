import React, { useState, useContext, lazy } from "react";
import { places } from "../data/places";
import { getImageUrl } from "../Utility/utils";
import {ImageSizeContext} from "../context/imageContext"
export default function ImageApp() {
  const [isLarge, setIsLarge] = useState(false);
  const imageSize = isLarge ? 150 : 100;
  return (
    <ImageSizeContext.Provider value={imageSize}>
      <label>
        <input
          checked={isLarge}
          onChange={(e) => setIsLarge(e.target.checked)}
          type="checkbox"
        />
        Use large images
      </label>
      <hr />
      <List />
    </ImageSizeContext.Provider>
  );
}

function List() {
  const listItems = places.map((place) => {
    return (
      <li key={place.id}>
        <Place place={place} />
      </li>
    );
  });
  return <ul>{listItems}</ul>;
}
function Place({ place }) {
  return (
    <>
      <PlaceImage place={place} />
      <p>
        <b>{place.name}</b>
        {":" + place.description}
      </p>
    </>
  );
}
function PlaceImage({ place }) {
  const imageSize = useContext(ImageSizeContext);
  return (
    <img
      src={getImageUrl(place)}
      alt={place.name}
      width={imageSize}
      height={imageSize}
    />
  );
}
