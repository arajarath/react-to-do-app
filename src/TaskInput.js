import React, { useState, useContext } from "react";
import { AppContext } from "./AppContext";
const TaskInput = () => {
  const [taskInput, setTaskInput] = useState("");

  const consumer = useContext(AppContext);

  const taskInputHandler = (e) => {
    setTaskInput(e.target.value);
  };
  const addTask = () => {
    consumer.addTaskToList(taskInput);
    setTaskInput("");
  };
  return (
    <>
      <input type="text" value={taskInput} onChange={taskInputHandler} />
      <button onClick={addTask}>Add To Do</button>
    </>
  );
};

export default TaskInput;
