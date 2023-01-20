import styles from "./flatButtonStyles.module.scss";

interface Props {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}

const FlatButton: React.FC<Props> = (props) => {
  const { children, className, onClick } = props;
  ///// return
  return (
    <button className={`${styles.container} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default FlatButton;
