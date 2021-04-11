import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import styled from "styled-components";
import { TiDelete, TiEdit } from "react-icons/ti";

const CompletedList = () => {
  const consumer = useContext(AppContext);

  const changeHandler = (id, status) => {
    consumer.resetStatus(id, status);
  };

  const deleteTask = (e, id) => {
    e.preventDefault();
    consumer.deleteCompletedTask(id);
  };

  const editTask = (e, id) => {
    e.preventDefault();
    consumer.editCompletedTask(id);
  };
  return (
    <>
      {consumer.completedTask.length ? (
        <div>
          <h3>Completed List</h3>
          {consumer.completedTask.map((task) => (
            // <li key={task.id}>{task.taskName}</li>
            <TaskListWrapper key={task.id}>
              <TaskLabel>
                <input
                  type="checkbox"
                  value={task.status}
                  defaultChecked={task.status}
                  onChange={(e) => changeHandler(task.id, e.target.checked)}
                />
                <EditIcon onClick={(e) => editTask(e, task.id)} />
                <DeleteIcon onClick={(e) => deleteTask(e, task.id)} />
                {task.taskName}
              </TaskLabel>
            </TaskListWrapper>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default CompletedList;

const TaskListWrapper = styled.div`
  width: 410px;
  padding: 12px;
  border: 1px solid #ccc;
  margin: 5px 0;
  border-radius: 5px;
  position: relative;
`;
const TaskLabel = styled.label`
  font-size: 18px;
`;
const DeleteIcon = styled(TiDelete)`
  color: red;
  font-size: 18px;
  position: absolute;
  right: 5px;
  cursor: pointer;
  font-size: 24px;
`;
const EditIcon = styled(TiEdit)`
  color: green;
  font-size: 18px;
  position: absolute;
  right: 35px;
  cursor: pointer;
  font-size: 24px;
`;
