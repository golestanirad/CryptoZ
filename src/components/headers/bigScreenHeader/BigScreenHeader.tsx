import { useDarkMode } from "../../../app/hooks";
import cryptoLogo from "../../../assets/images/icons8-cryptocurrency-64.png";
import styles from "./bigScreenHeaderStyles.module.scss";

const BigScreenHeader: React.FC = () => {
  //// hooks
  const { isDarkMode } = useDarkMode();
  /// return
  return (
    <div className={`${styles.container} ${isDarkMode ? "dark" : "light"}`}>
      <img src={cryptoLogo} alt="crypto logo" className={styles.logo} />
      <h1 className={styles.title}>CryptoZ</h1>
    </div>
  );
};

export default BigScreenHeader;
