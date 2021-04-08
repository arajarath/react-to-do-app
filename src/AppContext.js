import React, { useState } from "react";

export const AppContext = React.createContext();
const taskLists = [
  { id: 1, taskName: "First task", status: false },
  { id: 2, taskName: "Second task", status: false },
  { id: 3, taskName: "Third task", status: false }
];
const AppProvider = ({ children }) => {
  const [taskList, setTaskList] = useState(taskLists);
  const [isChecked, setIsChecked] = useState(false);

  const [completedTask, setCompletedTask] = useState([]);

  const addTaskToList = (addedTask, status) => {
    const newTask = {
      id: taskList.length + 1,
      taskName: addedTask,
      status: status
    };
    setTaskList([...taskList, newTask]);
  };
  const completionStatus = (id, checkedStatus) => {
    const found = taskList.find((task) => task.id === id);
    const newTaskList = taskList.filter((task) => task.id !== id);
    found.status = checkedStatus;
    setTaskList(newTaskList);
    const completedObj = {
      id: found.id,
      taskName: found.taskName,
      status: found.status
    };

    setCompletedTask([...completedTask, completedObj]);
  };

  const resetStatus = (id, status) => {
    const unCheck = completedTask.find((task) => task.id === id);
    const newTaskList = completedTask.filter((task) => task.id !== id);
    unCheck.status = status;
    setCompletedTask(newTaskList);
    const resetObj = {
      id: unCheck.id,
      taskName: unCheck.taskName,
      status: unCheck.status
    };

    setTaskList([...taskList, resetObj]);
  };

  return (
    <AppContext.Provider
      value={{
        taskList,
        addTaskToList,
        isChecked,
        completionStatus,
        completedTask,
        resetStatus
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
