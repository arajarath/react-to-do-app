import React, { useContext } from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import CompletedList from "./CompletedList";

export default function App() {
  return (
    <div>
      <TaskInput />
      <TaskList />
      <CompletedList />
    </div>
  );
}
