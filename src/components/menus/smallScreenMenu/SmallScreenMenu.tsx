import { useDarkMode } from "../../../app/hooks";
import BigScreenMenu from "../bigScreenMenu/BigScreenMenu";
import styles from "./smallScreenMenuStyles.module.scss";

const SmallScreenMenu: React.FC = () => {
  /// hooks
  const { isDarkMode } = useDarkMode();

  /// return
  return (
    <div className={`${styles.container} ${isDarkMode ? "dark" : "light"}`}>
      <BigScreenMenu />
    </div>
  );
};

export default SmallScreenMenu;
