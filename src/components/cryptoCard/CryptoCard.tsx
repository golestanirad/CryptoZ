import millify from "millify";
import { useNavigate } from "react-router-dom";
import { BsHeart, BsFillHeartFill } from "react-icons/bs";

import { routes } from "../../app/constants";
import { Coin } from "../../app/types";
import { Opacity } from "../";
import styles from "./cryptoCardStyle.module.scss";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggleFavorite } from "../../store/crypto/cryptoSlice";
import { useDarkMode } from "../../app/hooks";

interface Props {
  coin: Coin;
}
const CryptoCard: React.FC<Props> = (props) => {
  /// props
  const {
    coin: { name, rank, iconUrl, price, marketCap, change, uuid },
  } = props;

  /// hooks
  const navigate = useNavigate();

  const { isDarkMode } = useDarkMode();

  const dispatch = useAppDispatch();

  const favoriteCoins = useAppSelector((state) => state.crypto.favoriteCoins);

  //// handler
  const handleCardClick = () => {
    navigate(`/${routes.cryptocurrencies}/${uuid}`);
  };

  const handleHeartClick = (e: any) => {
    e.stopPropagation();
    dispatch(toggleFavorite(uuid));
  };

  //helper
  const isFavorite = (uuid: string) => {
    return favoriteCoins.includes(uuid);
  };

  /// return
  return (
    <Opacity>
      <div className={`${styles.container} card`} onClick={handleCardClick}>
        <div className={styles.header}>
          <span className={styles.name}>
            {rank}.{name}
          </span>
          <img
            src={iconUrl}
            alt={name}
            className={`${styles.logo} ${isDarkMode ? "dark" : "light"}`}
          />
          <div className={styles.heart} onClick={handleHeartClick}>
            {isFavorite(uuid) ? (
              <BsFillHeartFill color="red" />
            ) : (
              <BsHeart color="red" />
            )}
          </div>
        </div>
        <div className={styles.line} />
        <div className={styles.info}>
          <span>Price: {price ? millify(+price) : "-"}$ </span>
          <span>Market Cap: {marketCap ? millify(+marketCap) : "-"}$</span>
          <span>Change: {change ? millify(+change) : "-"}%</span>
        </div>
      </div>
    </Opacity>
  );
};

export default CryptoCard;
