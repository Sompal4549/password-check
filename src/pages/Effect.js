import React, { useState } from "react";
import { useCallback } from "react";
import AnotherApp from "../components/Dark/AnotherApp";
import { sculptureList } from "../data/sculptureList";
function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
function UploadButton() {
  return <Button onClick={() => alert(`Uploading!`)}>Upload Image</Button>;
}
const NewButton = ({ onSmash, children }) => {
  return <button onClick={onSmash}>{children}</button>;
};
const Effect = ({ productId, referrer, theme }) => {
  const handleClick = () => {
    alert(`Playing movie`);
  };
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const hasNext = index < sculptureList.length - 1;
  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }
  function handleMoreClick() {
    setShowMore(!showMore);
  }
  let sculpture = sculptureList[index];

  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculpture.length})
      </h3>
      <button onClick={handleMoreClick}>{showMore ? "hide" : "show"}</button>
      {sculpture && <p>{sculpture.description}</p>}
      <img alt={sculpture.alt} src={sculpture.url} />
      <NewButton onSmash={handleClick} />
      <section>
        <AnotherApp />
        <AlertButton message="Playing!">Play Movie</AlertButton>
        <AlertButton message="Uploading!">Upload Image</AlertButton>
        <h1>A Complete Guide to useEffect</h1>
        <Button onClick={handleClick}>click the button</Button>
        <UploadButton />
        <p>
          You wrote a few components with Hooks. Maybe even a small app. You're
          mostly satisfied. You're comfortable with the API and picked up a few
          tricks along the way. You even made some custom Hookd to extract
          repetitive logic (300 lines gone!) and showed it off to your
          colleagues. "Great job", they said.
        </p>
        <p>
          But sometimes when you useEffect, the pieces don't quite fit together.
          You have a nagging feeling that you're missing something. It seems
          similar to class lifecycles... but is it really? You find yourself
          asking questions like:
        </p>
        <ul>
          <li>How do I replicate componentDisMount with useEffect?</li>
          <li>How do I correctly fetch dat inside useEffect? What is []?</li>
          <li>Do I need to specify functions as effect dependencies or not?</li>
          <li>Why do I sometimes get an infinite refetching loop?</li>
          <li>
            Why do I sometimes get an old state or prop value inside my effect?
          </li>
        </ul>
        <p>
          When I just started using Hooks, I was confused by all of those
          questions too. Even when writing the initial Docs, I don't have a firm
          grasp on some of the subleties. I've since had a few aha{" "}
        </p>
      </section>
      <section>
        <h2>Adding event handlers</h2>
        <p>
          To add an event handler, you will first define a function and then
          pass it as a prop to the appropriate JSX tag. For example, here is a
          button that doesn't do anything yet:
        </p>
        <div>
          <button>I don't do anything</button>
          You can make it show a message when a user clicks by following these
          three steps:
          <ol>
            <li>
              Declare a function called handleClick inside your Button
              component.
            </li>
            <li>
              Implement the logic inside that function (use alert to show the
              message).
            </li>
            <li>Add onClick to the button JSX.</li>
          </ol>
        </div>
      </section>
    </>
  );
};

export default Effect;
