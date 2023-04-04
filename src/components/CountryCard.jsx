const CountryCard = ({country, population, region, capital, flag}) => {
  return (
    <div className="bg-white shadow text-sm text-gray-800 mx-9 my-4 w-64 rounded dark:bg-[#2b3945] dark:text-white">
      <img src={flag} style={{ width: 258, height: 150 }} className="shadow" />
      <div className="py-7 px-4">
        <h1 className="font-bold mb-3 text-lg">{country} </h1>
        <p className="py-1">
          <span className="font-bold mr-2"> Population:</span>{population}
        </p>
        <p className="py-1">
          <span className="font-bold mr-2 text-sm py-4">Region:</span>{region}
        </p>
        <p className="py-1"> 
          <span className="font-bold mr-2 text-sm">Capital:</span>{capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
