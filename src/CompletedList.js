import React, { useContext } from "react";
import { AppContext } from "./AppContext";

const CompletedList = () => {
  const consumer = useContext(AppContext);

  const changeHandler = (id, status) => {
    consumer.resetStatus(id, status);
  };
  return (
    <>
      {consumer.completedTask.length ? (
        <div>
          <h3>Completed List</h3>
          {consumer.completedTask.map((task) => (
            // <li key={task.id}>{task.taskName}</li>
            <div key={task.id}>
              <label>
                <input
                  type="checkbox"
                  value={task.status}
                  defaultChecked={task.status}
                  onChange={(e) => changeHandler(task.id, e.target.checked)}
                />
                {task.taskName}
              </label>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default CompletedList;
