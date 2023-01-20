import { ReactNode } from "react";
import styles from "./opacityStyles.module.scss";

interface Props {
  children: ReactNode;
  animationDuration?: string;
}

const Opacity: React.FC<Props> = ({ children, animationDuration = "1s" }) => {
  return (
    <div className={styles.container} style={{ animationDuration }}>
      {children}
    </div>
  );
};

export default Opacity;
