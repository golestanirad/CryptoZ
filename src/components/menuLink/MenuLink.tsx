import { NavLink, useLocation } from "react-router-dom";
import { useDarkMode } from "../../app/hooks";
import { Coin, MainMenuItem } from "../../app/types";
import styles from "./menuLinkStyles.module.scss";

interface Props {
  menuItem: MainMenuItem;
  subMenu?: Coin[];
}

const MenuLink: React.FC<Props> = (props) => {
  //// props
  const {
    menuItem: { icon, name, path },
    subMenu,
  } = props;

  /// hooks
  const location = useLocation();

  const { isDarkMode } = useDarkMode();

  /// helpers
  const showSubMenu = subMenu && location.pathname.includes(path);

  //// return
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <NavLink
          to={path}
          className={({ isActive }) =>
            `${styles.link}  ${isActive ? styles.active : ""}`
          }
        >
          <div className={styles.icon}>{icon}</div>
          <span>{name}</span>
        </NavLink>
      </div>

      <div
        className={styles.subMenuContainer}
        style={{
          height: showSubMenu ? "200px" : "0px",
        }}
      >
        {subMenu?.map((item, index) => {
          return (
            <NavLink
              id={`subMenu_${item.name}_${path}`}
              key={index}
              to={`${path}/${item.uuid}`}
              className={({ isActive }) => {
                if (isActive) {
                  document
                    .getElementById(`subMenu_${item.name}_${path}`)
                    ?.scrollIntoView({ behavior: "smooth" });
                }
                return `${styles.subMenuItemContainer}  ${
                  isActive ? styles.subActive : ""
                }`;
              }}
            >
              <span className={styles.subMenuItemName}>
                {index + 1}.{item.name}
              </span>
              <img
                src={item.iconUrl}
                alt={item.name}
                className={`${styles.subMenuItemImage} ${
                  isDarkMode ? "dark" : "light"
                }`}
              />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default MenuLink;
