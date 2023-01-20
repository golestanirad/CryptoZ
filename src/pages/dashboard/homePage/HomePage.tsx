import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { CryptoList, Loader, Stats } from "../../../components";
import { fetchCoinRanking } from "../../../store/crypto/cryptoAPI";
import styles from "./homePageStyles.module.scss";

const HomePage: React.FC = () => {
  /// hooks
  const isLoading = useAppSelector(
    (state) => state.crypto.loadings.isLoadingCoins
  );
  const coins = useAppSelector((state) => state.crypto.coins);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCoinRanking());
  }, []);

  //// return
  if (isLoading) {
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Stats />
      <CryptoList limited coins={coins} />
    </div>
  );
};

export default HomePage;
