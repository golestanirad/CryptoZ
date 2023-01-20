import { BiDollarCircle } from "react-icons/bi";
import {
  AiOutlineNumber,
  AiOutlineThunderbolt,
  AiOutlineTrophy,
  AiOutlineLineChart,
} from "react-icons/ai";
import {
  BsCurrencyExchange,
  BsHandThumbsUp,
  BsCheck2,
  BsArrowRepeat,
} from "react-icons/bs";
import { CiBoxes } from "react-icons/ci";
import millify from "millify";

import styles from "./cryptoDetailsPageStyles.module.scss";

export const getValueStat = ({
  price,
  rank,
  "24hVolume": volume,
  marketCap,
  allTimeHigh,
}) => [
  {
    label: (
      <div className={styles.label}>
        <BiDollarCircle className={styles.icon} />
        <span className={styles.label}>Price:</span>
      </div>
    ),
    value: <span className={styles.value}>{millify(Number(price))}$</span>,
  },
  {
    label: (
      <div className={styles.label}>
        <AiOutlineNumber className={styles.icon} />
        <span className={styles.label}>Rank:</span>
      </div>
    ),
    value: <span className={styles.value}>#{rank}</span>,
  },
  {
    label: (
      <div className={styles.label}>
        <AiOutlineThunderbolt className={styles.icon} />
        <span className={styles.label}>24h Volume:</span>
      </div>
    ),
    value: <span className={styles.value}>{millify(Number(volume))}$</span>,
  },
  {
    label: (
      <div className={styles.label}>
        <BiDollarCircle className={styles.icon} />
        <span className={styles.label}>Market Cap:</span>
      </div>
    ),
    value: <span className={styles.value}>{millify(Number(marketCap))}$</span>,
  },
  {
    label: (
      <div className={styles.label}>
        <AiOutlineTrophy className={styles.icon} />
        <span className={styles.label}>All Time High:</span>
      </div>
    ),
    value: (
      <span className={styles.value}>
        {millify(Number(allTimeHigh.price))}$
      </span>
    ),
  },
];

export const getOtherValuesStat = ({
  numberOfMarkets,
  numberOfExchanges,

  supply: { circulating, confirmed, total },
}) => [
  {
    label: (
      <div className={styles.label}>
        <AiOutlineLineChart className={styles.icon} />
        <span className={styles.label}>Number Of Markets:</span>
      </div>
    ),
    value: <span className={styles.value}>{millify(numberOfMarkets)}$</span>,
  },
  {
    label: (
      <div className={styles.label}>
        <BsCurrencyExchange className={styles.icon} />
        <span className={styles.label}>Number Of Exchanges:</span>
      </div>
    ),
    value: <span className={styles.value}>#{numberOfExchanges}</span>,
  },
  {
    label: (
      <div className={styles.label}>
        <BsHandThumbsUp className={styles.icon} />
        <span className={styles.label}>Aprroved Supply:</span>
      </div>
    ),
    value: confirmed ? (
      <BsCheck2 className={styles.label} />
    ) : (
      <span className={styles.label}>X</span>
    ),
  },
  {
    label: (
      <div className={styles.label}>
        <BsArrowRepeat className={styles.icon} />
        <span className={styles.label}>Total Supply:</span>
      </div>
    ),
    value: <span className={styles.value}>{millify(Number(total))}$</span>,
  },
  {
    label: (
      <div className={styles.label}>
        <CiBoxes className={styles.icon} />
        <span className={styles.label}>Circulating Supply:</span>
      </div>
    ),
    value: (
      <span className={styles.value}>{millify(Number(circulating))}$</span>
    ),
  },
];

export const getCryptoLinks = ({ links }) =>
  links.map(({ name, url, type }) => ({
    label: (
      <div className={styles.label}>
        <span className={styles.label}>{type}:</span>
      </div>
    ),
    value: (
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.value}
      >
        {name}
      </a>
    ),
  }));
