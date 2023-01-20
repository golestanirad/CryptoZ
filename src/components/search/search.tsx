import { CiSearch } from "react-icons/ci";
import styles from "./searchStyles.module.scss";

interface Props {
  searchTerm: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}
const Search: React.FC<Props> = (props) => {
  /// props
  const { searchTerm, onChange, placeholder } = props;

  //// return
  return (
    <div className={styles.container}>
      <input placeholder={placeholder} value={searchTerm} onChange={onChange} />
      <CiSearch />
    </div>
  );
};

export default Search;
