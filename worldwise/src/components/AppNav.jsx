import styles from "./AppNav.module.css";
import { NavLink } from "react-router-dom";

function AppNav(props) {
  return (
    <div>
      <nav className={styles.nav}>
        <ul>
          <li>
            <NavLink to="cities">Cities</NavLink>
          </li>
          <li>
            <NavLink to="countries">Countries</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default AppNav;