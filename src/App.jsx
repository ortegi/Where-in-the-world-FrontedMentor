import Header from "./components/header";
import CountryDetails from "./Pages/CountryDetails";
import { Routes, Route } from "react-router-dom";
import AllCountries from "./Pages/AllCountries";
import { useState, useEffect } from "react";


const initialStateDarkMode = localStorage.getItem('theme') === 'dark' 

const App = () => {

  const [darkMode, setdarkMode] = useState(initialStateDarkMode)

  useEffect(()=> {
    if(darkMode){
      document.documentElement.classList.add('dark');
      localStorage.setItem("theme", "dark");
    }else{
      document.documentElement.classList.remove('dark')
      localStorage.setItem("theme", "light")
    }
  },[darkMode])

  return (
    <div className="bg-[#f7f0f5] min-h-screen dark:bg-[#202c37] transition-all duration-1000"	>
      <Header darkMode={darkMode} setdarkMode={setdarkMode} />
      <Routes>
        <Route element={<AllCountries darkMode={darkMode} setdarkMode={setdarkMode} />} path="/">
          {" "}
        </Route>
        <Route element={<CountryDetails darkMode={darkMode} />} path="/country/:id">
          {" "}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
