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
  console.log(taskId);
  console.log(identify);
  console.log(priority);

  const [taskPriority, setTaskPriority] = useState(priority);
  const [visible, setVisible] = useState(true);

  const utmostPriorityRef = useRef();
  const moderatePriorityRef = useRef();
  const easyPriorityRef = useRef();

  const utmostPriorityAssign = (e) => {
    const newPriority = taskPriority === 3 ? 0 : 3;
    setTaskPriority(newPriority);
    onChangePriority(newPriority);

    // Apply styles
    utmostPriorityRef.current.style.backgroundColor =
      newPriority === 3 ? "rgb(255, 0, 0)" : "rgba(255, 0, 0, 0.36)";
    moderatePriorityRef.current.style.backgroundColor =
      "rgba(255, 255, 0, 0.36)";
    easyPriorityRef.current.style.backgroundColor = "rgba(0, 255, 0, 0.36)";
  };

  const moderatePriorityAssign = (e) => {
    const newPriority = taskPriority === 2 ? 0 : 2;
    setTaskPriority(newPriority);
    onChangePriority(newPriority);

    utmostPriorityRef.current.style.backgroundColor = "rgba(255, 0, 0, 0.36)";
    moderatePriorityRef.current.style.backgroundColor =
      newPriority === 2 ? "rgb(255, 255, 0)" : "rgba(255, 255, 0, 0.36)";
    easyPriorityRef.current.style.backgroundColor = "rgba(0, 255, 0, 0.36)";
  };

  const easyPriorityAssign = (e) => {
    const newPriority = taskPriority === 1 ? 0 : 1;
    setTaskPriority(newPriority);
    onChangePriority(newPriority);

    utmostPriorityRef.current.style.backgroundColor = "rgba(255, 0, 0, 0.36)";
    moderatePriorityRef.current.style.backgroundColor =
      "rgba(255, 255, 0, 0.36)";
    easyPriorityRef.current.style.backgroundColor =
      newPriority === 1 ? "rgb(0, 255, 0)" : "rgba(0, 255, 0, 0.36)";
  };

  function formatDateTime(datetimeString) {
    if (!datetimeString) return "";
    const date = new Date(datetimeString);
    return date.toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  }

  function deleteTask() {
    setVisible(false);
    alert("Task ID: " + taskId + " Deleted!");
  }

  function completeTask() {
    setVisible(false);
    alert("Task ID: " + taskId + " Completed!");
  }

  if (!visible) return null;
  return (
    <div>
      <div className={Styles.taskCard}>
        <div className={Styles.taskPriority}>
          <div
            className={Styles.utmostPriority}
            ref={utmostPriorityRef}
            id="utmostPriority"
            onClick={utmostPriorityAssign}
          ></div>
          <div
            className={Styles.moderatePriority}
            ref={moderatePriorityRef}
            id="moderatePriority"
            onClick={moderatePriorityAssign}
          ></div>
          <div
            className={Styles.easyPriority}
            ref={easyPriorityRef}
            id="easyPriority"
            onClick={easyPriorityAssign}
          ></div>
        </div>
        <div className={Styles.taskInfo}>
          <h2 className={Styles.taskName}>{taskName}</h2>
          <p className={Styles.taskDesc}>{taskDescription}</p>
        </div>
        <div className={Styles.timer}>
          <Image
            src={HourGlassIcon}
            alt="Settings Icon"
            width={0}
            height={0}
            sizes="100vw"
            className={Styles.Icon}
          />
          <div className={Styles.timerText}>
            <p>
              <b>Starts At: </b>
              {formatDateTime(startTime)}
            </p>
            <p>
              <b>Ends By: </b>
              {formatDateTime(endTime)}
            </p>
          </div>
        </div>
        <div className={Styles.taskActions}>
          <div className={Styles.completeBtn} onClick={completeTask}>
            <Image
              src={CompleteIcon}
              alt="Settings Icon"
              width={0}
              height={0}
              sizes="100vw"
              className={Styles.Icon}
            />
          </div>
          <div className={Styles.deleteBtn} onClick={deleteTask}>
            <Image
              src={DeleteIcon}
              alt="Settings Icon"
              width={0}
              height={0}
              sizes="100vw"
              className={Styles.Icon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
