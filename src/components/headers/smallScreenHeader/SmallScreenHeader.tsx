import { useDarkMode } from "../../../app/hooks";
import cryptoLogo from "../../../assets/images/icons8-cryptocurrency-64.png";
import styles from "./smallScreenHeaderStyles.module.scss";

interface Props {
  handleSideMenu: () => void;
}

const SmallScreenHeader: React.FC<Props> = (props) => {
  /// props
  const { handleSideMenu } = props;

  /// hooks
  const { isDarkMode } = useDarkMode();

  /// return
  return (
    <div className={`${styles.container} ${isDarkMode ? "dark" : "light"}`}>
      <img src={cryptoLogo} alt="crypto logo" className={styles.logo} />
      <h1 className={styles.title}>CryptoZ</h1>

      <div className={styles.menu} onClick={handleSideMenu}>
        menu
      </div>
    </div>
  );
};

export default SmallScreenHeader;
