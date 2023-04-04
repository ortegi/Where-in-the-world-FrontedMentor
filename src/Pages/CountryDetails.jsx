import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import IconBackArrow from "../emojis/IconBackArrow";
import CountryCardDetails from "../components/CountryCardDetails";

import IconSpinner from "../emojis/IconSpinner";

const CountryDetails = ({darkMode}) => {

  let params = useParams();
  console.log(params.id);

  const color = darkMode ? '#FFF': '#111517'

  const { data, loading } = useFetch(
    `https://restcountries.com/v3.1/alpha/${params.id}`
  );

  console.log(data);

  if (loading) {
    return (
      <div className="flex justify-center mt-20">
        <IconSpinner color={color} />
      </div>
    );
  }

  if (data) {
    return (
      <div className="mx-12 mt-11  dark:text-white">
        <Link
          to="/"
          className=" flex rounded bg-white dark:bg-[#2b3945]  text-[#111517] dark:text-white py-2 px-2 shadow hover:bg-slate-300 w-32 justify-center items-center"
        >
          <IconBackArrow color={color} /> <span className="mx-2 text-base font-semibold">Back</span>
        </Link>

        <div className="">
          {data.map((item) => (
            <CountryCardDetails item={item} key={item.cca2} />
          ))}
        </div>
      </div>
    );
  }
};

export default CountryDetails;
