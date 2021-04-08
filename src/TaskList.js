import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const TaskList = () => {
  const consumer = useContext(AppContext);

  const checkBoxHandler = (id, status) => {
    consumer.completionStatus(id, status);
    // console.log(!isChecked);
  };
  return (
    <>
      {consumer.taskList.map((task) => (
        <div key={task.id}>
          <label>
            <input
              type="checkbox"
              value={task.status}
              defaultChecked={task.status}
              onChange={(e) => checkBoxHandler(task.id, e.target.checked)}
            />
            {task.taskName}
          </label>
        </div>
      ))}
    </>
  );
};

export default TaskList;
