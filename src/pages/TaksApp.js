
import AddTask from "../components/AddTask";
import {

  TaskProvider,
} from "../context/TaskContext";

import TaskList from "../components/AddTask/TaskList";
export default function TaskApp() {


  return (
    <>
      {/* <TaskContext.Provider value={tasks}>
        <TaskDispatchContext.Provider value={dispatch}> */}
      <TaskProvider>
        <h1>Day off in Kyoto</h1>
        <AddTask />
        <TaskList />
      </TaskProvider>
      {/* </TaskDispatchContext.Provider>
      </TaskContext.Provider> */}
    </>
  );
  // The reducer function contains your custom state logic and the initialState can be a simple value but generally will contain an object.
}
