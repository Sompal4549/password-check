import React, { useState, useContext, createContext } from "react";
import { renderIntoDocument } from "react-dom/test-utils";
import styled from "styled-components";
const NewContent = createContext();
function LearnContext() {
  const Div = styled.div`
    padding: 0;
    margin: 0;
    width: 100%;
    height: auto;
  `;
  const [name, setName] = useState("veeru");

  return (
    <NewContent.Provider value={name}>
      <Div>
        <h2>React Context</h2>
        <p>React Context is a way to manage state globally.</p>
        <p>
          It can be used together with the useState Hook to share the state
          between deeply nested components more easily than with useState alone.
        </p>
        <h2>The Problem</h2>
        <p>
          State should be held by the highest parent component in the stack that
          requires access to the state.
        </p>
        <p>
          To illustrate, we have many nested components. The component at the
          top and bottom of the stack need access to the state.
        </p>
        <p>
          To do the without Context, we will need to pass the state as "props"
          through each nested component. This is called "prop drilling"
        </p>

        <br />
        <Component3 name={"something"} />
      </Div>
    </NewContent.Provider>
  );
}
export default LearnContext;
const Component = () => {
  const [name, setName] = useState("Jesse");
  return (
    <>
      <p>My name is {name}.</p>
      <Component2 name={name} />
    </>
  );
};
const Component2 = ({ name }) => {
  return (
    <>
      <Component3 name={name} />
    </>
  );
};
const Component3 = () => {
  const user = useContext(NewContent);
  return (
    <>
      <div>{user}</div>
    </>
  );
};
