import Image from "next/image";
import Styles from "./navBar.module.css";
import SettingsIcon from "../../../../public/assets/images/vectors/SettingsIcon.svg";

export default function NavBar() {
  return (
    <nav className={Styles.navBar}>
      <h2 className={Styles.brandName}>hatchTasks.com</h2>
      <div className={Styles.settingsBtn}>
        <Image
          src={SettingsIcon}
          alt="Settings Icon"
          width={0}
          height={0}
          sizes="100vw"
          className={Styles.settingsIcon}
        />
      </div>
    </nav>
  );
}
