import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import styled from "styled-components";

const TaskList = () => {
  const consumer = useContext(AppContext);

  const checkBoxHandler = (id, status) => {
    consumer.completionStatus(id, status);
    // console.log(!isChecked);
  };
  console.log(consumer.taskList);

  return (
    <>
      {consumer.taskList.length
        ? consumer.taskList.map((task) => (
            <TaskListWrapper key={task.id}>
              <TaskLabel>
                <input
                  type="checkbox"
                  value={task.status}
                  defaultChecked={task.status}
                  onChange={(e) => checkBoxHandler(task.id, e.target.checked)}
                />
                {task.taskName}
              </TaskLabel>
            </TaskListWrapper>
          ))
        : null}
    </>
  );
};

export default TaskList;

const TaskListWrapper = styled.div`
  width: 90%;
  padding: 12px;
  border: 1px solid #ccc;
  margin: 5px 0;
  border-radius: 5px;
`;
const TaskLabel = styled.label`
  font-size: 18px;
`;
