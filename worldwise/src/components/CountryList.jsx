import Sidebar from "./Sidebar.jsx";
import Message from "./Message.jsx";
import styles from "./CountryList.module.css";
import CountryItem from "./CountryItem.jsx";
import { useCities } from "../contexts/CitiesContext.jsx";

function CountryList() {
  const { cities, isLoading } = useCities();
  if (isLoading) return <Sidebar />;

  if (!cities.length) return <Message message="No cities found." />;

  const countries = cities.reduce((acc, city) => {
    if (!acc.map((el) => el.country).includes(city.country)) {
      return [...acc, { emoji: city.emoji, country: city.country }];
    } else {
      return acc;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country.id} country={country} />
      ))}
    </ul>
  );
}

export default CountryList;
