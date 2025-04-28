import Image from "next/image";
import Styles from "./page.module.css";
import SettingsIcon from "../../public/assets/images/vectors/SettingsIcon.svg";
import NavBar from "./components/navBar/page";
import Task from "./components/task/page";

export default function Home() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return (
    <div className={Styles.page}>
      <main className={Styles.main}>
        <NavBar />
        <div className={Styles.tasksHolder}>
          <div className={Styles.tasksHolderHeader}>
            <h1>Your Tasks: ({formattedDate})</h1>
          </div>
          <div className={Styles.tasksContainer}>
          <Task
            taskName="Complete Homework"
            taskDescription="Finish maths assignment before 5 PM. Then go to dance class and finish some more things off."
          />
          <Task
            taskName="Complete Homework"
            taskDescription="Finish maths assignment before 5 PM."
          />
          <Task
            taskName="Complete Homework"
            taskDescription="Finish maths assignment before 5 PM."
          />
          <Task
            taskName="Complete Homework"
            taskDescription="Finish maths assignment before 5 PM."
          />
          <Task
            taskName="Complete Homework"
            taskDescription="Finish maths assignment before 5 PM."
          />
          </div>
        </div>
      </main>
    </div>
  );
}
