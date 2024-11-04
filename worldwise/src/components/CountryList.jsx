import Sidebar from "./Sidebar.jsx";
import Message from "./Message.jsx";
import PropTypes from "prop-types";
import CityItem from "./CityItem.jsx";
import styles from "./CountryList.module.css";

CountryList.propTypes = {
  cities: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

// CityList.defaultProps = {
//   isLoading: false,
//   cities: [],
// };

function CountryList({ cities, isLoading }) {
  if (isLoading) return <Sidebar />;

  if (!cities.length) return <Message message="No cities found." />;

  return (
    <ul className={styles.countryList}>
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  );
}

export default CountryList;