import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./index.css";
import CityList from "./components/CityList.jsx";
import CountriesList from "./components/CountryList.jsx";
import City from "./components/City.jsx";
import Form from "./components/Form.jsx";
import { CitiesProvider } from "./contexts/CitiesContext.jsx";
import { FakeAuthProvider } from "./contexts/FakeAuthContext.jsx";
import Spinner from "./components/Spinner.jsx";

const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const Product = lazy(() => import("./pages/Product.jsx"));
const Pricing = lazy(() => import("./pages/Pricing.jsx"));
const Login = lazy(() => import("./pages/Login.jsx"));
const AppLayout = lazy(() => import("./pages/AppLayout.jsx"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"));

function App() {
  return (
    <CitiesProvider>
      <FakeAuthProvider>
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route
                path="/"
                element={<HomePage />}
              />
              <Route
                path="/product"
                element={<Product />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/pricing"
                element={<Pricing />}
              />
              <Route
                path="/app"
                element={<AppLayout />}>
                <Route
                  index
                  element={
                    <Navigate
                      replace
                      to="cities"
                    />
                  }
                />
                <Route
                  path="cities"
                  element={<CityList />}
                />
                <Route
                  path="cities/:id"
                  element={<City />}
                />
                <Route
                  path="countries"
                  element={<CountriesList />}
                />
                <Route
                  path="form"
                  element={<Form />}
                />
              </Route>
              <Route
                path="*"
                element={<PageNotFound />}
              />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </FakeAuthProvider>
    </CitiesProvider>
  );
}

export default App;
