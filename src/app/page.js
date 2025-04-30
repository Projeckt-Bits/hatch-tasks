"use client";
import Image from "next/image";
import { useState } from "react";
import Styles from "./page.module.css";
import NavBar from "./components/navBar/page";
import Task from "./components/task/page";
import ActionBar from "./components/actionBar/page";

export default function Home() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  const [tasks, setTasks] = useState([]);

  // Toggle or assign priority (1-3), sort after update
  const handlePriorityChange = (id, newPriority) => {
    if (tasks!=null) {
      const updatedTasks = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            priority: task.priority === newPriority ? 0 : newPriority,
          }
        : task
    );

    const sortedTasks = updatedTasks.sort((a, b) => b.priority - a.priority);
    setTasks(sortedTasks);
    }
};

  // Add task from dialog (default priority: 0)
  const handleAddTask = ({ taskName, taskDescription, startTime, endTime }) => {
    const newTask = {
      id: Date.now(),
      taskName,
      taskDescription,
      priority: 0,
      startTime,
      endTime,
    };

    const updatedTasks = [...tasks, newTask];
    const sortedTasks = updatedTasks.sort((a, b) => b.priority - a.priority);
    setTasks(sortedTasks);
  };

  return (
    <div className={Styles.page}>
      <main className={Styles.main}>
        <NavBar />
        <div className={Styles.tasksHolder}>
          <div className={Styles.tasksHolderHeader}>
            <h1>Your Tasks: ({formattedDate})</h1>
          </div>
          <div className={Styles.tasksContainer}>
            {tasks.map((task) => (
              <Task
                key={task.id}
                taskName={task.taskName}
                taskDescription={task.taskDescription}
                priority={task.priority}
                startTime={task.startTime}
                endTime={task.endTime}
                onChangePriority={(newPriority) =>
                  handlePriorityChange(task.id, newPriority)
                }
              />
            ))}
          </div>
        </div>
        {/* Pass handleAddTask to ActionBar */}
        <ActionBar onAddTask={handleAddTask} />
      </main>
    </div>
  );
}
