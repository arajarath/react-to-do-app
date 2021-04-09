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
    if (e.target.value !== "" && e.target.value.trim() !== "") {
      consumer.addTaskToList(taskInput);
      setTaskInput("");
    }
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
  width: 70%;
  padding: 11px;
  font-size: 16px;
  border-radius: 5px 0 0 5px;
  border: 1px solid #071d49;
  outline: 0;
`;
const Button = styled.button`
  width: 20%;
  padding: 12px;
  font-size: 16px;
  color: #fff;
  background: #071d49;
  border: none;
  border-radius: 0 5px 5px 0;
`;
