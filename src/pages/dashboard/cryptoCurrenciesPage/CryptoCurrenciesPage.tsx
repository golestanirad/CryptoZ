import { useEffect } from "react";
import { Outlet, useOutlet } from "react-router-dom";
import { FaArrowAltCircleUp } from "react-icons/fa";

import { useAppDispatch, useAppSelector } from "../../../store/hooks";

import { CryptoList, Loader } from "../../../components";
import { fetchCoinRanking } from "../../../store/crypto/cryptoAPI";
import styles from "./cryptoCurrenciesStyles.module.scss";
import { useScroll } from "../../../app/hooks";
import { Coin } from "../../../app/types";

interface Props {
  coins: Coin[];
}
const CryptoCurrencies: React.FC<Props> = (props) => {
  /// props
  const { coins } = props;

  /// hooks
  const outlet = useOutlet();

  const { ref, isScrolled } = useScroll();

  const isLoading = useAppSelector(
    (state) => state.crypto.loadings.isLoadingCoins
  );

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCoinRanking());
  }, []);

  /// handlers
  const goToTop = () => {
    ref.current.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  //// return
  if (isLoading) {
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  }
  return (
    <div className={styles.container} id="crypto-currencies-page" ref={ref}>
      {outlet ? <Outlet /> : <CryptoList coins={coins} />}
      {isScrolled && (
        <FaArrowAltCircleUp size={30} className={styles.up} onClick={goToTop} />
      )}
    </div>
  );
};

export default CryptoCurrencies;
