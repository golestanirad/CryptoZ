import { AiOutlineHome } from "react-icons/ai";
import { GiReceiveMoney, GiCardExchange, GiNewspaper } from "react-icons/gi";
import { MainMenuItem, StatTitle } from "./types";

export const MAIN_MENU_ITEMS: MainMenuItem[] = [
  { name: "Home", path: "/", icon: <AiOutlineHome /> },
  {
    name: "Cryptocurrencies",
    path: "cryptocurrencies",
    icon: <GiReceiveMoney />,
  },
  { name: "Exchanges", path: "exchanges", icon: <GiCardExchange /> },
  { name: "News", path: "news", icon: <GiNewspaper /> },
];

export const statsTitles: StatTitle = {
  total24hVolume: "Total 24h Volume:",
  totalCoins: "Total Cryptocurrencies:",
  totalExchanges: "Total Exchanges:",
  totalMarketCap: "Total Market Cap:",
  totalMarkets: "Total Markets:",
};

export const routes = {
  home: "/",
  cryptocurrencies: "cryptocurrencies",
  exchanges: "exchanges",
  news: "news",
  favorite: "favorite",
};

export const messages = {
  rejectedFetchError: "something went wrong while fetching your data",
};

export const timePeriod = ["3h", "24h", "7d", "30d", "3m", "1y", "3y", "5y"];
