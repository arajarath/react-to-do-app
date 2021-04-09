import React, { useState, useEffect } from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  // const [isChecked, setIsChecked] = useState(false);

  const [completedTask, setCompletedTask] = useState([]);

  const addTaskToList = (addedTask, status) => {
    const newTask = {
      id: taskList.length + 1,
      taskName: addedTask,
      status: status
    };
    setTaskList([...taskList, newTask]);
    const convertString = JSON.stringify(taskList);

    localStorage.setItem("taskList", convertString);
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

  useEffect(() => {
    const taskListFromStorage = localStorage.getItem("taskList");
    // console.log(taskListFromStorage);
    setTaskList(JSON.parse(taskListFromStorage));
  }, []);

  return (
    <AppContext.Provider
      value={{
        taskList,
        addTaskToList,
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
