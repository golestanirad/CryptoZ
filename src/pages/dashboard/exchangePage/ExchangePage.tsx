import styles from "./exchangePageStyles.module.scss";
import underConstruction from "../../../assets/images/undraw_under_construction.svg";

const ExchangePage: React.FC = () => {
  /// return
  return (
    <div className={styles.container}>
      <img
        src={underConstruction}
        alt="this page is under construction"
        className={styles.img}
      />
      <h4>under construction!</h4>
    </div>
  );
};

export default ExchangePage;
