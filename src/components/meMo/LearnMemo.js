import React from "react";
import { useState } from "react";
import List from "./List";
const LearnMemo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["todo 1", "todo 2"]);
  const increment = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <>
      <div>
        <h2>React Memo</h2>

        <p>
          Using memo will cause React to skip rendering a component if its props
          have not changed.
        </p>
        <p>This can improve performance.</p>
        <h2>Problem</h2>
        <p>
          In this example, the Todos component re-renders even when the todos
          have not changed.
        </p>
        <List todos={todos} />
        <div>
          {count} increase it by one{" "}
          <button onClick={increment}>click me</button>
        </div>
      </div>
    </>
  );
};
export default LearnMemo;
