import { useState } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../../store/hooks";
import styles from "./cryptoDetailsPageStyles.module.scss";
import parse from "html-react-parser";
import { CryptoChart, DetailTable, Loader } from "../../../components";
import { getCryptoLinks, getOtherValuesStat, getValueStat } from "./tableData";
import { timePeriod } from "../../../app/constants";
import { useFetchCoinHistory, useFetchCoinDetail } from "../../../app/hooks";

const CryptoDetailsPage: React.FC = () => {
  //// hooks
  const [time, setTime] = useState("3h");

  const { coinId } = useParams();

  const coinHistory = useFetchCoinHistory(time, coinId);

  const coinDetails = useFetchCoinDetail(coinId);

  const isLoading = useAppSelector(
    (state) => state.crypto.loadings.isLoadingCoinDetails
  );

  //// conditional return
  if (!coinDetails || isLoading) {
    return (
      <div className="loader">
        <Loader />
      </div>
    );
  }

  //// helpers
  const { name = "", symbol = "", description = "" } = coinDetails;

  /// return
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {name}&nbsp;({symbol})
      </h1>
      {coinHistory && (
        <>
          <div className={styles.timeSelectContainer}>
            <label htmlFor="time" className={styles.selectLabel}>
              Choose a time period:
            </label>
            <select
              value={time}
              name="time"
              id="time"
              onChange={(e) => {
                setTime(e.target.value);
              }}
            >
              {timePeriod.map((period) => (
                <option key={period} value={period}>
                  {period}
                </option>
              ))}
            </select>
          </div>
          <div className={styles.chart}>
            <CryptoChart
              coinHistory={coinHistory}
              timeType={time.includes("h") ? "hour" : "day"}
            />
          </div>
        </>
      )}
      <div className={styles.infoConatiner}>
        <DetailTable
          title={` ${name} Value Statistics`}
          rows={getValueStat(coinDetails)}
          description="An overview showing the statistics of Bitcoin, such as the base and quote currency, the rank, and trading volume."
        />
        <DetailTable
          title={`More Of ${name} Value Statistics`}
          rows={getOtherValuesStat(coinDetails)}
          description="An overview showing the statistics of Bitcoin, such as the base and quote currency, the rank, and trading volume."
        />

        <DetailTable
          title={`What is ${name}`}
          description={parse(description)}
        />
        <div>
          <DetailTable
            title={`${name} Links`}
            rows={getCryptoLinks(coinDetails)}
          />
        </div>
      </div>
    </div>
  );
};

export default CryptoDetailsPage;
