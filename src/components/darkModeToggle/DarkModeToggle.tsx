import { FaMoon, FaSun } from "react-icons/fa";
import { useDarkMode } from "usehooks-ts";

import styles from "./darkModeToggleStyles.module.scss";

interface Props {
  onClick: () => void;
}

const DarkModeToggle: React.FC<Props> = (props) => {
  /// props
  const { onClick } = props;

  //// hooks
  const { isDarkMode } = useDarkMode(true);

  ///// return
  return (
    <div className={styles.container}>
      <input
        type="checkbox"
        className={styles.checkbox}
        id="checkbox"
        onClick={onClick}
      />

      <label
        htmlFor="checkbox"
        className={`${styles.label} ${isDarkMode ? "light" : "dark"}`}
      >
        <FaMoon size={10} className={styles.moon} />
        <FaSun size={10} className={styles.sun} />
        <div className={`${styles.ball} ${isDarkMode ? "dark" : "light"}`} />
      </label>
    </div>
  );
};

export default DarkModeToggle;
