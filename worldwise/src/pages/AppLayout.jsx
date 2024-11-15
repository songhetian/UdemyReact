import Sidebar from "../components/Sidebar.jsx";
import styles from "./AppLayout.module.css";
import Map from "../components/Map.jsx";
import { useFakeAuth } from "../contexts/FakeAuthContext.jsx";
import User from "../components/User.jsx";

function AppLayout() {
  const { isAuthenticated } = useFakeAuth();
  return (
    <div className={styles.app}>
      {isAuthenticated ? <User /> : null}
      <Sidebar />
      <Map />
    </div>
  );
}

export default AppLayout;
