import Message from "./Message.jsx";
import CityItem from "./CityItem.jsx";
import styles from "./CityList.module.css";
import { useCities } from "../contexts/CitiesContext.jsx";
import Spinner from "./Spinner.jsx"; // CityList.defaultProps = {

// CityList.defaultProps = {
//   isLoading: false,
//   cities: [],
// };

function CityList() {
  const { cities, isLoading } = useCities();

  if (isLoading) return <Spinner />;

  if (!cities.length) return <Message message="No cities found." />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CityList;
