"use client";
import React, { useState, useRef } from "react";
import Image from "next/image";
import Styles from "./task.module.css";
import DeleteIcon from "../../../../public/assets/images/vectors/DeleteIcon.svg";
import CompleteIcon from "../../../../public/assets/images/vectors/CompletedIcon.svg";
import HourGlassIcon from "../../../../public/assets/images/vectors/HourGlass.svg";

export default function Task({
  identify,
  taskName,
  taskDescription,
  priority,
  onChangePriority,
  startTime,
  endTime,
}) {
  const taskId = Math.floor(Math.random() * 10000000);

  const [taskPriority, setTaskPriority] = useState(priority);
  const [visible, setVisible] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  // Shown on task card
  const [displayTaskName, setDisplayTaskName] = useState(taskName);
  const [displayTaskDescription, setDisplayTaskDescription] =
    useState(taskDescription);
  const [displayStartTime, setDisplayStartTime] = useState(startTime);
  const [displayEndTime, setDisplayEndTime] = useState(endTime);

  // Edited inside dialog
  const [editedTaskName, setEditedTaskName] = useState("");
  const [editedTaskDescription, setEditedTaskDescription] = useState("");
  const [editedStartTime, setEditedStartTime] = useState("");
  const [editedEndTime, setEditedEndTime] = useState("");

  const utmostPriorityRef = useRef();
  const moderatePriorityRef = useRef();
  const easyPriorityRef = useRef();

  const utmostPriorityAssign = () => {
    const newPriority = taskPriority === 3 ? 0 : 3;
    setTaskPriority(newPriority);
    onChangePriority(newPriority);
    utmostPriorityRef.current.style.backgroundColor =
      newPriority === 3 ? "rgb(255, 0, 0)" : "rgba(255, 0, 0, 0.36)";
    moderatePriorityRef.current.style.backgroundColor =
      "rgba(255, 255, 0, 0.36)";
    easyPriorityRef.current.style.backgroundColor = "rgba(0, 255, 0, 0.36)";
  };

  const moderatePriorityAssign = () => {
    const newPriority = taskPriority === 2 ? 0 : 2;
    setTaskPriority(newPriority);
    onChangePriority(newPriority);
    utmostPriorityRef.current.style.backgroundColor = "rgba(255, 0, 0, 0.36)";
    moderatePriorityRef.current.style.backgroundColor =
      newPriority === 2 ? "rgb(255, 255, 0)" : "rgba(255, 255, 0, 0.36)";
    easyPriorityRef.current.style.backgroundColor = "rgba(0, 255, 0, 0.36)";
  };

  const easyPriorityAssign = () => {
    const newPriority = taskPriority === 1 ? 0 : 1;
    setTaskPriority(newPriority);
    onChangePriority(newPriority);
    utmostPriorityRef.current.style.backgroundColor = "rgba(255, 0, 0, 0.36)";
    moderatePriorityRef.current.style.backgroundColor =
      "rgba(255, 255, 0, 0.36)";
    easyPriorityRef.current.style.backgroundColor =
      newPriority === 1 ? "rgb(0, 255, 0)" : "rgba(0, 255, 0, 0.36)";
  };

  const formatDateTime = (datetimeString) => {
    if (!datetimeString) return "";
    const date = new Date(datetimeString);
    return date.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  const deleteTask = () => {
    setVisible(false);
    alert("Task ID: " + taskId + " Deleted!");
  };

  const completeTask = () => {
    setVisible(false);
    alert("Task ID: " + taskId + " Completed!");
  };

  const openEditDialog = () => {
    setEditedTaskName(displayTaskName);
    setEditedTaskDescription(displayTaskDescription);
    setEditedStartTime(displayStartTime);
    setEditedEndTime(displayEndTime);
    setShowDialog(true);
  };

  const saveEdits = () => {
    setDisplayTaskName(editedTaskName);
    setDisplayTaskDescription(editedTaskDescription);
    setDisplayStartTime(editedStartTime);
    setDisplayEndTime(editedEndTime);
    setShowDialog(false);
  };

  if (!visible) return null;

  return (
    <>
      <div className={Styles.taskCard} onClick={openEditDialog}>
        <div className={Styles.taskPriority}>
          <div
            className={Styles.utmostPriority}
            ref={utmostPriorityRef}
            onClick={(e) => {
              e.stopPropagation();
              utmostPriorityAssign();
            }}
          ></div>
          <div
            className={Styles.moderatePriority}
            ref={moderatePriorityRef}
            onClick={(e) => {
              e.stopPropagation();
              moderatePriorityAssign();
            }}
          ></div>
          <div
            className={Styles.easyPriority}
            ref={easyPriorityRef}
            onClick={(e) => {
              e.stopPropagation();
              easyPriorityAssign();
            }}
          ></div>
        </div>
        <div className={Styles.taskInfo}>
          <h2 className={Styles.taskName}>{displayTaskName}</h2>
          <p className={Styles.taskDesc}>{displayTaskDescription}</p>
        </div>
        <div className={Styles.timer}>
          <Image
            src={HourGlassIcon}
            alt="HourGlass Icon"
            width={0}
            height={0}
            sizes="100vw"
            className={Styles.Icon}
          />
          <div className={Styles.timerText}>
            <p>
              <b>Starts At: </b>
              {formatDateTime(displayStartTime)}
            </p>
            <p>
              <b>Ends By: </b>
              {formatDateTime(displayEndTime)}
            </p>
          </div>
        </div>
        <div className={Styles.taskActions}>
          <div
            className={Styles.completeBtn}
            onClick={(e) => {
              e.stopPropagation();
              completeTask();
            }}
          >
            <Image
              src={CompleteIcon}
              alt="Complete Icon"
              width={0}
              height={0}
              sizes="100vw"
              className={Styles.Icon}
            />
          </div>
          <div
            className={Styles.deleteBtn}
            onClick={(e) => {
              e.stopPropagation();
              deleteTask();
            }}
          >
            <Image
              src={DeleteIcon}
              alt="Delete Icon"
              width={0}
              height={0}
              sizes="100vw"
              className={Styles.Icon}
            />
          </div>
        </div>
      </div>

      {showDialog && (
        <div className={Styles.addTaskDialog}>
          <div className={Styles.headDiv}>
            <h2 className={Styles.Heading}>Edit Task</h2>
          </div>
          <div className={Styles.taskDetails}>
            <p>Task Name:</p>
            <input
              className={Styles.taskNameInput}
              type="text"
              placeholder="Please Enter Your Task Name..."
              value={editedTaskName}
              onChange={(e) => setEditedTaskName(e.target.value)}
            />
            <p>Task Description:</p>
            <input
              className={Styles.taskDescInput}
              type="text"
              placeholder="Please Enter Your Task Description..."
              value={editedTaskDescription}
              onChange={(e) => setEditedTaskDescription(e.target.value)}
            />
            Expected Start Time:
            <input
              className={Styles.startTimeInput}
              type="datetime-local"
              value={editedStartTime}
              onChange={(e) => setEditedStartTime(e.target.value)}
            />
            Expected Ending Time:
            <input
              className={Styles.endTimeInput}
              type="datetime-local"
              value={editedEndTime}
              onChange={(e) => setEditedEndTime(e.target.value)}
            />
          </div>
          <div className={Styles.buttonsDiv}>
            <div onClick={saveEdits} className={Styles.submitBtn}>
              Edit Task
            </div>
            <div
              onClick={() => {
                setShowDialog(false);
              }}
              className={Styles.cancelBtn}
            >
              Cancel
            </div>
          </div>
        </div>
      )}
    </>
  );
}
