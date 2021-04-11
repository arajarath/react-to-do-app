import styled from "styled-components";
import React, { useState, useContext } from "react";
import { BiSave } from "react-icons/bi";
import { AppContext } from "./AppContext";

const Edit = ({ task, editReset }) => {
  const [editedValue, setEditedValue] = useState(task.taskName);

  const consumer = useContext(AppContext);
  const editValue = (e) => {
    if (e.target.value !== "" && e.target.value.trim() !== "")
      setEditedValue(e.target.value);
  };

  const saveEditedVal = (task) => {
    editReset();
    task.taskName = editedValue;
    consumer.editTask(task);
  };
  console.log(editedValue);
  return (
    <>
      <EditDiv>
        <EditInput
          defaultValue={task.taskName}
          onChange={(e) => editValue(e)}
          type="text"
        />
        <SaveIcon onClick={(e) => saveEditedVal(task)} />
      </EditDiv>
    </>
  );
};

export default Edit;

const SaveIcon = styled(BiSave)`
  color: green;
  font-size: 18px;
  position: absolute;
  right: 5px;
  cursor: pointer;
  font-size: 24px;
  top: 10px;
`;
const EditInput = styled.input`
  font-size: 18px;
  padding: 12px;
  border: none;
  width: 88%;
  outline: none;
`;
const EditDiv = styled.div`
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;
  position: relative;
  margin: 5px 0;
  width: 435px;
`;
