import React, { useState, useEffect } from "react";

export const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);
  // const [isChecked, setIsChecked] = useState(false);

  const [completedTask, setCompletedTask] = useState([]);

  const addTaskToList = (addedTask, status) => {
    const newTask = {
      id: Math.floor(Math.random() * 100),
      taskName: addedTask,
      status: status
    };
    const updated = [...taskList, newTask];
    setTaskList(updated);
    const convertString = JSON.stringify(updated);

    localStorage.setItem("taskList", convertString);
  };
  const completionStatus = (id, checkedStatus) => {
    const found = taskList.find((task) => task.id === id);
    const newTaskList = taskList.filter((task) => task.id !== id);
    found.status = checkedStatus;
    setTaskList(newTaskList);
    const updateTaskList = JSON.stringify(newTaskList);
    localStorage.setItem("taskList", updateTaskList);
    const completedObj = {
      id: found.id,
      taskName: found.taskName,
      status: found.status
    };
    const completedTasks = [...completedTask, completedObj];
    setCompletedTask(completedTasks);
    const convertString = JSON.stringify(completedTasks);
    localStorage.setItem("completedList", convertString);
  };

  const resetStatus = (id, status) => {
    const unCheck = completedTask.find((task) => task.id === id);
    const newTaskList = completedTask.filter((task) => task.id !== id);
    unCheck.status = status;
    setCompletedTask(newTaskList);
    const completedReset = JSON.stringify(newTaskList);
    localStorage.setItem("completedList", completedReset);

    const resetObj = {
      id: unCheck.id,
      taskName: unCheck.taskName,
      status: unCheck.status
    };
    const resetTask = [...taskList, resetObj];
    setTaskList(resetTask);
    const convertString = JSON.stringify(resetTask);
    localStorage.setItem("taskList", convertString);
  };

  const deleteTask = (id) => {
    const deletedTask = taskList.filter((task) => task.id !== id);
    setTaskList(deletedTask);
    const convertString = JSON.stringify(deletedTask);
    localStorage.setItem("taskList", convertString);
  };

  const deleteCompletedTask = (id) => {
    const deletedCompletedTask = completedTask.filter((task) => task.id !== id);
    setCompletedTask(deletedCompletedTask);
    const convertString = JSON.stringify(deletedCompletedTask);

    localStorage.setItem("completedList", convertString);
  };

  const editTask = (task) => {
    console.log(task); // const foundIndex = taskList.findIndex((tasks) => tasks.id === task.id);
    // const newTask = [...taskList];
    // newTask[foundIndex] = task;
    // console.log(newTask);

    // setTaskList(newTask);
    const temp = taskList;
    setTaskList(temp.map((item) => (item.id === task.id ? task : item)));
    console.log(temp);
    const convertString = JSON.stringify(temp);
    localStorage.setItem("taskList", convertString);
  };
  const editCompletedTask = (id) => {
    const editedCompletedask = taskList.filter((task) => task.id === id);
    console.log(editedCompletedask);
  };
  useEffect(() => {
    const taskListFromStorage = localStorage.getItem("taskList");
    if (JSON.parse(taskListFromStorage)) {
      setTaskList(JSON.parse(taskListFromStorage));
    } else {
      setTaskList([]);
    }
  }, []);

  useEffect(() => {
    const completedTaskFromStorage = localStorage.getItem("completedList");
    if (JSON.parse(completedTaskFromStorage)) {
      setCompletedTask(JSON.parse(completedTaskFromStorage));
    } else {
      setCompletedTask([]);
    }
  }, [completedTask.length]);

  return (
    <AppContext.Provider
      value={{
        taskList,
        addTaskToList,
        completionStatus,
        completedTask,
        resetStatus,
        deleteTask,
        deleteCompletedTask,
        editTask,
        editCompletedTask
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
