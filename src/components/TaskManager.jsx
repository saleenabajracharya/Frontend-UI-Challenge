import React, { useState, useEffect } from "react";

export const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Load tasks from localStorage 
  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  // Save tasks to localStorage 
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask.trim() === "") return;
    const updatedTasks = [
      ...tasks,
      { id: Date.now(), text: newTask, completed: false },
    ];
    setTasks(updatedTasks);
    setNewTask("");
  };

  const toggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTasks = () => {
    const remainingTasks = tasks.filter((task) => !task.completed);
    setTasks(remainingTasks);
  };

  return (
    <div className=" bg-[#ffffff] flex justify-center items-center">
        <div className=" bg-[#F1F0FF] w-[90%] py-20 px-4">
        <h1 className="text-6xl text-center font-bold text-[var(--primary-color)] pt-2 my-6">Task Manager</h1>
        <p className="text-center text-[var(--content-color)] mb-6">Your daily to do list</p>
        <div className="flex justify-center items-center my-12">
        <div className="bg-white rounded-3xl shadow-lg p-8 w-full max-w-4xl text-center">
        <div className="space-y-4 mb-6 text-left mx-4">
          {tasks.map((task) => (
            <div key={task.id} className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className={`h-5 w-5 border-gray-300 rounded focus:ring-indigo-500 checked:color-[#4532FC80]
                }`}
                />

              <span
                className={`flex-1 text-[#3C434A] ${
                  task.completed ? " text-[var(--text-color)]" : ""
                  
                }`}
              >
                {task.text}
              </span>

            </div>
          ))}
          
          <div className="flex justify-end">
            <button
              onClick={deleteTasks}
              className="flex items-center px-3 py-1 text-sm text-red-500 border border-red-500 rounded-md hover:bg-red-50"
            >
              <span className="mr-1">✖</span> Delete
            </button>
          </div>
        </div>

        <div className="flex flex-col  gap-3 mx-4">
          <input
            type="text"
            placeholder="Add new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 "
          />
          <div className="w-full flex justify-start">
          <button
            onClick={addTask}
            className="bg-[var(--primary-color)] hover:bg-[#3726CC] text-white py-2 rounded-2xl font-semibold w-[195px]"
          >
            Add Task
          </button>
          </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};


