import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import styled from "styled-components";
import { TiDelete, TiEdit } from "react-icons/ti";
import Edit from "./Edit";
const CompletedList = () => {
  const [editComp, setEditComp] = useState(null);

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
    setEditComp(id);
  };

  const editReset = () => {
    setEditComp(null);
  };
  return (
    <>
      {consumer.completedTask.length > 0 && (
        <div>
          <h3>Completed List</h3>
        </div>
      )}

      {consumer.completedTask.length
        ? consumer.completedTask.map((task) =>
            editComp !== null && task.id === editComp ? (
              <Edit task={task} editReset={editReset} />
            ) : (
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
            )
          )
        : null}
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
