import styles from "./loaderStyles.module.scss";
import crypto from "../../assets/images/icons8-cryptocurrency-64.png";

const Loader: React.FC = () => {
  /// return
  return <img src={crypto} alt="loading" className={styles.image} />;
};

export default Loader;
