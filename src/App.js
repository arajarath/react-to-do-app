import React from "react";
import TaskInput from "./TaskInput";
import TaskList from "./TaskList";
import CompletedList from "./CompletedList";
import styled from "styled-components";

export default function App() {
  return (
    <Task>
      <TaskInput />
      <TaskList />
      <CompletedList />
    </Task>
  );
}

const Task = styled.div`
  margin: 0 auto;
`;
