import React, { useEffect, useState } from "react";
function useTime() {
  const [time, setTime] = useState(() => new Date());
  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}
function FavoriteColor() {
  const [color, setColor] = useState("red");
  const time = useTime();
  return (
    <>
      {time.getHours()} : {time.getMinutes()} : {time.getSeconds()}
      <div>
        <h1>
          My favorite color is <span style={{ color: color }}>{color}</span>!
        </h1>
        <button type="button" onClick={() => setColor("blue")}>
          Blue
        </button>
        <button onClick={() => setColor("yellow")}>Yellow</button>
        <button onClick={() => setColor("red")}>Red</button>
        <button onClick={() => setColor("hotPink")}>HotPink</button>
        <button onClick={() => setColor("green")}>Green</button>
      </div>
      <p>You must import Hooks from react.</p>
      <p>
        Here we are using the useState Hook to keep track of the application
        state.
      </p>
      <p>
        State generally refers to application data or properties that need to be
        tracked.
      </p>
      <p>You must import Hooks from react.</p>
      <p>
        Here we are using the useState Hook to keep track of the application
        state.
      </p>
      <p>
        State generally refers to application data or properties that need to be
        tracked.
      </p>
      <p>We must import Hooks from react.</p>
      <p>Here we are using UseState to keep track of the application state.</p>
      <p>
        State generally refers to application data or properties that need to be
        tracked.
      </p>
      <h3>Hook Rules</h3>
      <p>There are 3 rules for hooks:</p>
      <p>Hooks can only be called inside React function components.</p>
      <p>Hooks cannot be conditional.</p>
      <p>Hooks can only be called at the top level of the component.</p>
      <p>Hooks can only be called inside of React Component.</p>
      <p>Hooks cannot be conditional.</p>
      <p>Hooks can only be called at the top level of component</p>
    </>
  );
}
export default FavoriteColor;
