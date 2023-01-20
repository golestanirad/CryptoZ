import { useNavigate } from "react-router-dom";

import styles from "./errorPageStyles.module.scss";
import pageNotFound from "../../assets/images/404_Page_Not_Found.png";
import { FlatButton } from "../../components";

const ErrorPage: React.FC = () => {
  /// hooks
  const navigate = useNavigate();
  /// return
  return (
    <div className={styles.container}>
      <img src={pageNotFound} alt="page not found" className={styles.image} />
      <FlatButton className={styles.button} onClick={() => navigate("/")}>
        back to home
      </FlatButton>
    </div>
  );
};

export default ErrorPage;
