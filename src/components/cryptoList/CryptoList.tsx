import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "..";

import { Coin } from "../../app/types";
import CryptoCard from "../cryptoCard/CryptoCard";
import styles from "./cryptoListStyle.module.scss";

interface Props {
  limited?: boolean;
  coins: Coin[];
}

const CryptoList: React.FC<Props> = (props) => {
  /// props
  const { limited, coins } = props;

  /// hooks
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");

  // helpers
  const numberOfCoins = limited ? 10 : coins?.length;

  const filteredCoins = coins
    .filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, numberOfCoins);

  /// handlers
  const handleShowMore = () => {
    navigate("cryptocurrencies");
  };

  /// return
  return (
    <div className={styles.container}>
      <h1>Top {numberOfCoins} Cryptos In The World</h1>
      <div className={styles.search}>
        <Search
          searchTerm={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className={styles.coins} id="list1">
        {filteredCoins.map((coin) => (
          <CryptoCard coin={coin} key={coin.name} />
        ))}
      </div>

      {limited && (
        <h3 className={styles.more} onClick={handleShowMore}>
          Show More ...
        </h3>
      )}
    </div>
  );
};

export default CryptoList;
