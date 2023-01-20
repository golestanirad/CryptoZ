import { useEffect } from "react";
import { fetchCoinHistory } from "../../store/crypto/cryptoAPI";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const useFetchCoinHistory = (
  time: string,
  coinId: string | undefined
) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (coinId) {
      dispatch(fetchCoinHistory({ coinId, timePeriod: time }));
    }
  }, [coinId, time]);

  const coinHistory = useAppSelector(
    (state) => state.crypto.selectedCoinHistory
  );

  return coinHistory;
};
