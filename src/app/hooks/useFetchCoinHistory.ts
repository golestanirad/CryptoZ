import { useEffect } from "react";
import { fetchCoinDetails } from "../../store/crypto/cryptoAPI";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

export const useFetchCoinDetail = (coinId: string | undefined) => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (coinId) {
      dispatch(fetchCoinDetails(coinId));
    }
  }, [coinId]);
  const coinDetails = useAppSelector(
    (state) => state.crypto.selectedCoinDetails
  );
  return coinDetails;
};
