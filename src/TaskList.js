import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import styled from "styled-components";
import { TiDelete, TiEdit } from "react-icons/ti";
import Edit from "./Edit";
const TaskList = () => {
  const [editComp, setEditComp] = useState(null);
  const consumer = useContext(AppContext);

  const checkBoxHandler = (id, status) => {
    consumer.completionStatus(id, status);
  };

  const deleteTask = (e, id, status) => {
    e.preventDefault();
    consumer.deleteTask(id, status);
  };
  const editTask = (e, id) => {
    e.preventDefault();
    consumer.editTask(id);
    setEditComp(id);
  };
  const editReset = () => {
    setEditComp(null);
  };
  return (
    <>
      {consumer.taskList.length
        ? consumer.taskList.map((task) =>
            editComp !== null && task.id === editComp ? (
              <Edit task={task} editReset={editReset} />
            ) : (
              <TaskListWrapper key={task.id}>
                <TaskLabel>
                  <input
                    type="checkbox"
                    value={task.status}
                    defaultChecked={task.status}
                    onChange={(e) => checkBoxHandler(task.id, e.target.checked)}
                  />
                  {task.taskName}
                  <EditIcon onClick={(e) => editTask(e, task.id)} />
                  <DeleteIcon onClick={(e) => deleteTask(e, task.id)} />
                </TaskLabel>
              </TaskListWrapper>
            )
          )
        : null}
    </>
  );
};

export default TaskList;

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
