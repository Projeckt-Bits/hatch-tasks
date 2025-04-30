"use client";
import Image from "next/image";
import Styles from "./actionBar.module.css";
import AddIcon from "../../../../public/assets/images/vectors/AddIcon.svg";
import { useState } from "react";

export default function ActionBar({ onAddTask }) {
  const [showDialog, setShowDialog] = useState(false);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!taskName.trim() || !taskDescription.trim()) return;

    onAddTask({
      taskName: taskName.trim(),
      taskDescription: taskDescription.trim(),
      startTime: startTime,
      endTime: endTime,
    });

    // Clear and close dialog
    setTaskName("");
    setTaskDescription("");
    setShowDialog(false);
  };
  return (
    <nav className={Styles.actionBar}>
      <div className={Styles.taskBtn}>
        <div className={Styles.addTaskBtn} onClick={() => setShowDialog(true)}>
          <Image
            src={AddIcon}
            alt="Settings Icon"
            width={0}
            height={0}
            sizes="100vw"
            className={Styles.addIcon}
          />
        </div>
      </div>
      {showDialog && (
        <div className={Styles.addTaskDialog}>
          <div className={Styles.headDiv}>
            <h2 className={Styles.Heading}>Add New Task</h2>
          </div>
          <div className={Styles.taskDetails}>
            <p>Task Name:</p>
            <input
              className={Styles.taskNameInput}
              type="text"
              placeholder="Please Enter Your Task Name..."
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
            <p>Task Description:</p>
            <input
              className={Styles.taskDescInput}
              type="text"
              placeholder="Please Enter Your Task Description..."
              value={taskDescription}
              onChange={(e) => setTaskDescription(e.target.value)}
            />
            Expected Start Time:
            <input
              className={Styles.startTimeInput}
              type="datetime-local"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
            />
            Expected Ending Time:
            <input
              className={Styles.endTimeInput}
              type="datetime-local"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
            />
          </div>
          <div className={Styles.buttonsDiv}>
            <div onClick={handleSubmit} className={Styles.submitBtn}>
              Add Task
            </div>
            <div
              onClick={() => {
                // Clear and close dialog
                setTaskName("");
                setTaskDescription("");
                setShowDialog(false);
              }}
              className={Styles.cancelBtn}
            >
              Cancel
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
