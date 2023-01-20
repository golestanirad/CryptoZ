import { Routes, Route } from "react-router-dom";
import "./App.css";
import {
  CryptoDetailsPage,
  DashboardPage,
  ErrorPage,
  HomePage,
  CryptoCurrencies,
  NewsPage,
  ExchangePage,
} from "./pages";
import { routes } from "./app/constants";
import { useAppSelector } from "./store/hooks";
import { useDarkMode } from "./app/hooks";

const App: React.FC = () => {
  /// hooks
  const { coins, favoriteCoins } = useAppSelector((state) => state.crypto);

  const { isDarkMode } = useDarkMode(true);
  console.log({ isDarkMode });
  /// helper
  const fc = coins.filter((coin) => favoriteCoins.includes(coin.uuid));

  ///// return
  return (
    <>
      <Routes>
        <Route path={routes.home} element={<DashboardPage />}>
          <Route index element={<HomePage />} />

          <Route
            path={routes.cryptocurrencies}
            element={<CryptoCurrencies coins={coins} />}
          >
            <Route path=":coinId" element={<CryptoDetailsPage />} />
          </Route>

          <Route path={routes.exchanges} element={<ExchangePage />} />

          <Route path={routes.news} element={<NewsPage />} />

          <Route
            path={routes.favorite}
            element={<CryptoCurrencies coins={fc} />}
          >
            <Route path=":coinId" element={<CryptoDetailsPage />} />
          </Route>
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
};

export default App;
