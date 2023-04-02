import { useParams, Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import IconBackArrow from "../emojis/IconBackArrow";
import CountryCardDetails from "../components/CountryCardDetails";

import IconSpinner from "../emojis/IconSpinner";

const CountryDetails = () => {
  let params = useParams();
  console.log(params.id);

  const { data, loading } = useFetch(
    `https://restcountries.com/v3.1/alpha/${params.id}`
  );

  console.log(data);

  if (loading) {
    return (
      <div className="flex justify-center mt-20">
        <IconSpinner />
      </div>
    );
  }

  if (data) {
    return (
      <div className="mx-12 mt-11">
        <Link
          to="/"
          className=" flex rounded bg-white py-2 px-2 shadow hover:bg-slate-300 w-32 justify-center items-center"
        >
          <IconBackArrow /> <span className="mx-2 text-base font-semibold">Back</span>
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
