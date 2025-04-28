import React from 'react';
import Styles from "./taskCard.module.css";
export default function taskCard({
  taskName,
  taskDescription,
  taskPriority,
  timeLimit,
  isCompleted
}) {
  return (
    <div className={Styles.taskCard}>
      <div className={Styles.taskHeader}>
        <input className={Styles.taskName} type="text" value={taskName} placeholder="Task Name" />
        <select className={Styles.taskPriority} value={taskPriority}>
          <option value="low">Low Priority</option>
          <option value="medium">Medium Priority</option>
          <option value="high">High Priority</option>
        </select>
      </div>
      
      <div className={Styles.taskBody}>
        <textarea className={Styles.taskDescription} value={taskDescription} placeholder="Task Description"></textarea>
        <div className={Styles.taskDetails}>
          <div className={Styles.taskTime}>
            <input className={Styles.timeLimit}type="datetime-local" value={timeLimit} />
          </div>
          <div className={Styles.taskStatus}>
            <label>
              Completed: 
              <input type={Styles.checkbox} checked={isCompleted} />
            </label>
          </div>
        </div>
      </div>
      
      <div className={Styles.taskFooter}>
        <button className={Styles.saveBtn}>Save Task</button>
      </div>
    </div>
  );
}
