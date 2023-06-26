import React from "react";
// import { todos } from './Todos';
import { nanoid } from "nanoid";

const List = ({ todos }) => {
  console.log("what is this!");
  return (
    <>
      {todos.map((todo) => {
        return <div key={nanoid(5)}>{todo}</div>;
      })}
    </>
  );
};
export default React.memo(List);
