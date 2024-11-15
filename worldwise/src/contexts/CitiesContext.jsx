import { createContext, useContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

const CitiesContext = createContext();

CitiesProvider.propTypes = {
  children: PropTypes.node,
};

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
        currentCity: {},
      };
    case "cities/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
        currentCity: action.payload,
      };
    case "city/loaded":
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };
    case "cities/deleted":
      return {
        ...state,
        isLoading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
        currentCity: {},
      };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      throw new Error(`Unknown action type ${action.type}`);
  }
}

function CitiesProvider({ children }) {
  //TODO create context
  // const [cities, setCities] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [currentCity, setCurrentCity] = useState({});

  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );
  console.log(cities);
  useEffect(() => {
    async function fetchCities() {
      try {
        dispatch({ type: "loading" });
        const res = await fetch("http://localhost:8000/cities");
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch (e) {
        dispatch({ type: "rejected", payload: "获取失败" });
      }
    }

    fetchCities();
  }, []);

  async function getCity(id) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`http://localhost:8000/cities/${id}`);
      const data = await res.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch (e) {
      dispatch({ type: "rejected", payload: "城市获取失败" });
    }
  }

  async function createCity(newCity) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`http://localhost:8000/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      dispatch({ type: "cities/created", payload: data });
    } catch (e) {
      dispatch({ type: "rejected", payload: e.messages });
    }
  }

  async function deleteCity(id) {
    try {
      dispatch({ type: "loading" });
      const res = await fetch(`http://localhost:8000/cities/${id}`, {
        method: "DELETE",
      });
      if (res.status !== 200) {
        throw new Error("删除失败");
      }
      dispatch({ type: "cities/deleted", payload: id });
    } catch (e) {
      dispatch({ type: "rejected", payload: e.messages });
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  return useContext(CitiesContext);
}

export { CitiesProvider, useCities };
