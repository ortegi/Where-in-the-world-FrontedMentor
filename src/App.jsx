import Header from "./components/header";
import CountryDetails from "./Pages/CountryDetails";
import CountryCard from "./components/CountryCard.jsx";
import { Routes, Route } from "react-router-dom";
import AllCountries from "./Pages/AllCountries";

const App = () => {
  return (
    <div className="bg-[#f7f0f5] min-h-screen">
      <Header />
      <Routes>
        <Route element={<AllCountries />} path="/">
          {" "}
        </Route>
        <Route element={<CountryDetails />} path="/country/:id">
          {" "}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
