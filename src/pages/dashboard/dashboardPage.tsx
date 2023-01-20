import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDarkMode } from "../../app/hooks";
import {
  BigScreenHeader,
  BigScreenMenu,
  DarkModeToggle,
  Footer,
  SmallScreenHeader,
} from "../../components";
import SmallScreenMenu from "../../components/menus/smallScreenMenu/SmallScreenMenu";
import styles from "./dashboardPageStyles.module.scss";
const DashboardPage: React.FC = () => {
  ///// hooks
  const [isSmallScreenSideMenuOpen, setIsSmallScreenSideMenuOpen] =
    useState(false);

  const { isDarkMode, toggle } = useDarkMode(true);

  const location = useLocation();
  useEffect(() => {
    setIsSmallScreenSideMenuOpen(false);
  }, [location]);

  /// return
  return (
    <div className={`${styles.container} ${isDarkMode ? "dark" : "light"}`}>
      <div className={styles.mode}>
        <DarkModeToggle onClick={toggle} />
      </div>
      <div className={styles.layout}>
        <div className={styles.bigScreenMenu}>
          <BigScreenHeader />
          <BigScreenMenu />
        </div>
        <div className={styles.smallScreenMenu}>
          <SmallScreenHeader
            handleSideMenu={() =>
              setIsSmallScreenSideMenuOpen((preState) => !preState)
            }
          />

          <div
            className={`${
              !isSmallScreenSideMenuOpen ? styles.hideMenu : styles.showMenu
            }`}
          >
            <SmallScreenMenu />
          </div>
        </div>
      </div>
      <div className={styles.outlet}>
        <Outlet />
      </div>

      {/* Footer will be added if needed */}
      {/* <Footer /> */}
    </div>
  );
};

export default DashboardPage;
