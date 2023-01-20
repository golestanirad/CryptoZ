import styles from "./bigScreenMenuStyles.module.scss";
import MenuLink from "../../menuLink/MenuLink";
import { MAIN_MENU_ITEMS, routes } from "../../../app/constants";
import { useAppSelector } from "../../../store/hooks";
import { MainMenuItem } from "../../../app/types";
import { BsFillHeartFill } from "react-icons/bs";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDarkMode } from "../../../app/hooks";

const BigScreenMenu: React.FC = () => {
  //// hooks
  const { coins, favoriteCoins } = useAppSelector((state) => state.crypto);

  const { isDarkMode } = useDarkMode();

  const navigate = useNavigate();

  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname.includes(routes.favorite) && favoriteCoins.length === 0) {
      navigate("/");
    }
  }, [pathname, favoriteCoins.length]);

  /// helper
  const haveSubMenue = (menuItem: MainMenuItem) =>
    menuItem.name === "Cryptocurrencies" && coins.length;

  const fc = coins.filter((coin) => favoriteCoins.includes(coin.uuid));

  /// return
  return (
    <div className={`${styles.container} ${isDarkMode ? "dark" : "light"}`}>
      {MAIN_MENU_ITEMS.map((menuItem) => (
        <MenuLink
          key={menuItem.name}
          menuItem={menuItem}
          subMenu={haveSubMenue(menuItem) ? coins : undefined}
        />
      ))}
      <div
        style={{
          transition: "1s",
          transform: !fc.length ? "translateX(-1000px)" : "",
        }}
      >
        <MenuLink
          key={"favoriteCoins"}
          menuItem={{
            icon: <BsFillHeartFill />,
            name: "Favorite Coins",
            path: "/favorite",
          }}
          subMenu={fc}
        />
      </div>
    </div>
  );
};

export default BigScreenMenu;
