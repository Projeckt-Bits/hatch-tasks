"use client";
import React from "react";
import Image from "next/image";
import Styles from "./task.module.css";
import DeleteIcon from "../../../../public/assets/images/vectors/DeleteIcon.svg";
import CompleteIcon from "../../../../public/assets/images/vectors/CompletedIcon.svg";
import HourGlassIcon from "../../../../public/assets/images/vectors/HourGlass.svg";

export default function Task({ taskName, taskDescription }) {
  const taskId = Math.floor(Math.random() * 10000000);
  console.log(taskId);
  const taskPriority = "No Priority";

  const utmostPriorityAssign = (e) => {
    const clickedDiv = e.target;
    clickedDiv.style.backgroundColor = "rgb(255, 0, 0)";
  }
  const moderatePriorityAssign = (e) => {
    const clickedDiv = e.target;
    clickedDiv.style.backgroundColor = "rgb(255, 255, 0)";
  }
  const easyPriorityAssign = (e) => {
    const clickedDiv = e.target;
    clickedDiv.style.backgroundColor = "rgb(0, 255, 0)";
  }

  function deleteTask() {
    console.log("Task");
    console.log(taskId);
    console.log("Deleted");
  }

  function completeTask() {
    console.log("Task");
    console.log(taskId);
    console.log("Completed");
  }

  return (
    <div>
      <div className={Styles.taskCard}>
        <div className={Styles.taskPriority}>
            <div className={Styles.utmostPriority} id="utmostPriority" onClick={utmostPriorityAssign}></div>
            <div className={Styles.moderatePriority} id="moderatePriority" onClick={moderatePriorityAssign}></div>
            <div className={Styles.easyPriority} id="easyPriority" onClick={easyPriorityAssign}></div>
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
            <p>Starts At: </p>
            <p>Ends By: </p>
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
