
const CountryCardDetails = ({ item }) => {
  const currencies = [];
  const languages = [];
  const border = []

    for (const key in item.languages) {
        languages.push(item.languages[key]);
      }
      for (const key in item.currencies) {
        currencies.push(item.currencies[key].name);
        console.log(currencies);
      }

      if(item.borders){
        item.borders.forEach(element => border.push(element))
      }


  return (
    <div className="flex mt-12 md:justify-start flex-col md:flex-row">
      <img src={item.flags.png} style={{ width: 318, height: 220 }} />
      <div className="md:ml-20 md:w-1/4 w-5/6 text-lg md:text-base mb-4">
        <h1 className="font-bold text-2xl text-[#111517] dark:text-white md:mt-0 mt-10 transition-all duration-1000">
          {item.name.common}{" "}
        </h1>
        <div className="flex py-4 md:justify-between flex-col md:flex-row ">
          <div className=" ">
            <h6 className="font-bold"> Capital</h6>
            <p className="py-1"> {item.capital} </p>
            <h6 className="font-bold">Population</h6>
            <p className="py-1">
              {item.population}
            </p>
            <h6 className="font-bold">Continent</h6>
            <p className="py-1">
              {item.continents.map((item) => item)}{" "}
            </p>
          </div>

          <div className="">
          <h6 className="font-bold">Concurrencies</h6>
            <p className="py-1">
              {currencies.map((item) => item)}
            </p>
            <h6 className="font-bold">FIFA</h6>
            <p className="py-1">
             {item.fifa}{" "}
            </p>
            <h6 className="font-bold">Languages</h6>
            <p className="py-1">
              {languages.map((item) => item)}{" "}
            </p>
          </div>
        </div>
        <div>
            {
              border.length > 0 ? <div> 
                <h6 className="font-bold">Borders</h6>
                <ul className="flex py-3">{border.map(element => (<li key={element} className="bg-white dark:bg-[#2B3945] transition-all duration-1000 shadow rounded mr-2 px-2 py-1"> {element} </li>))} </ul> </div> : ''
            }
        </div>
      </div>
    </div>
  );
};

export default CountryCardDetails;
