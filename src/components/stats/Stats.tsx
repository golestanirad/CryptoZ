import _ from "lodash";

import { useAppSelector } from "../../store/hooks";
import styles from "./statsStyles.module.scss";
import { statsTitles } from "../../app/constants";
import millify from "millify";

const Stats: React.FC = () => {
  //// hooks
  const stats = useAppSelector((state) => state.crypto.stats);

  //// return
  return (
    <div className={styles.container}>
      <h1>Global Crypto Stats</h1>
      <div className={styles.stats}>
        {_.map(stats, (value, key) =>
          statsTitles[key] ? (
            <div className={styles.stat} key={key}>
              <span className={styles.key}>{statsTitles[key]}</span>
              <span className={styles.value}>{millify(Number(value))}</span>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Stats;
