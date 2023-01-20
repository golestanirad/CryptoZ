import styles from "./detailTableStyles.module.scss";

interface Props {
  title?: string;
  description?: React.ReactNode;
  rows?: { label: React.ReactNode; value: React.ReactNode }[];
}

const DetailTable: React.FC<Props> = (props) => {
  //// props
  const { title = "", description = "", rows } = props;
  //// return
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
      {rows?.map(({ label, value }, index) => (
        <div
          key={index}
          className={`${styles.rowContainer} ${index % 2 === 0 && styles.even}`}
        >
          <span className={styles.label}>{label}</span>
          <span className={styles.value}>{value}</span>
        </div>
      ))}
    </div>
  );
};

export default DetailTable;
