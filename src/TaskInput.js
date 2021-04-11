import React, { useState, useContext } from "react";
import { AppContext } from "./AppContext";
import styled from "styled-components";
const TaskInput = () => {
  const [taskInput, setTaskInput] = useState("");

  const consumer = useContext(AppContext);

  const taskInputHandler = (e) => {
    setTaskInput(e.target.value);
  };
  const addTask = (e) => {
    if (taskInput !== "" && taskInput.trim() !== "") {
      consumer.addTaskToList(taskInput, false);
      setTaskInput("");
    }
    setTaskInput("");
  };
  return (
    <>
      <Input
        type="text"
        onKeyUp={(e) => {
          e.key === "Enter" && addTask(e);
        }}
        value={taskInput}
        onChange={taskInputHandler}
      />
      <Button onClick={(e) => addTask(e)}>Add To Do</Button>
    </>
  );
};

export default TaskInput;

const Input = styled.input`
  width: 300px;
  padding: 11px;
  font-size: 16px;
  border-radius: 5px 0 0 5px;
  border: 1px solid #071d49;
  outline: 0;
`;
const Button = styled.button`
  width: 110px;
  padding: 11px;
  font-size: 16px;
  color: #fff;
  background: #071d49;
  border: 2px solid #071d49;
  border-radius: 0 5px 5px 0;
`;
