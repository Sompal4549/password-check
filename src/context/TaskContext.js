import { createContext, useContext, useReducer } from "react";
export const TaskContext = createContext(null);
export const TaskDispatchContext = createContext(null);
export function TaskProvider({ children }) {
  const [tasks, dispatch] = useReducer(taskReducer, initialTasks);
  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>{children}</TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
export function useTasks() {
  return useContext(TaskContext);
}
export function useTasksDispatch() {
  return useContext(TaskDispatchContext);
}
function taskReducer(tasks, action) {
  switch (action.type) {
    case "added": {
      return [...tasks, { id: action.id, text: action.text, done: false }];
    }
    case "changed": {
      return tasks.map((t) => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case "deleted": {
      return tasks.filter((t) => t.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
const initialTasks = [
    {id:0, text:"Philosopher's Path", done:true},
    {id:1, text:"Visit the temple", done:false},
    {id:2, text:"Drink matcha", done:false}
]