import Input from "../components/Input";
import Button from "../components/button";
import { useEffect, useState } from "react";
import CountryCard from "../components/CountryCard.jsx";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import IconSpinner from "../emojis/IconSpinner";

const AllCountries = () => {
  const [word, setWord] = useState("");
  const [filtered, setFiltered] = useState(false);

  const { data, showData, setShowData, loading } = useFetch(
    "https://restcountries.com/v3.1/all"
  );

  useEffect(() => {
    if (data) {
      const firstLetter = word.charAt(0).toLocaleUpperCase();
      const restOfTheWord = word.slice(1);
      const searchP = firstLetter + restOfTheWord;
      if (searchP === "") {
        setShowData(data);
      }
      const result = data.filter((item) =>
        item.name.common.startsWith(searchP)
      );
      console.log(result);
      setShowData(result);
    }
  }, [word]);

  const handleClickFilter = (region) => {
    const result = data.filter((item) => item.region === region);
    console.log(result);
    setShowData(result);
  };

  if (loading) {
    return <div className="flex justify-center mt-20">
        <IconSpinner/>
    </div>;
  }


  return (
    <div>
      <div className="flex mx-12 mt-11 justify-between">
        <Input word={word} setWord={setWord} />
        <Button
          handleClickFilter={handleClickFilter}
          filtered={filtered}
          setFiltered={setFiltered}
        />
      </div>
      <div className="flex mt-6 flex-wrap justify-center">
        {showData.map((item) => (
          <Link to={`/country/${item.cca2}`} key={item.cca2}>
            <CountryCard
              country={item.name.common}
              region={item.region}
              flag={item.flags.png}
              population={item.population}
              capital={item.capital}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllCountries;
