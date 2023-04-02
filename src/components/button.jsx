import { useState } from "react";
import IconArrow from "../emojis/IconArrow";
import Options from "./Options";


const Button = ({handleClickFilter, filtered, setFiltered}) => {

    const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    setIsHidden(!isHidden)
    setFiltered(!filtered)
  };

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const bg = filtered ? 'bg-slate-300 shadow': '';

  return (
    <div className="flex flex-col">
      <button

        className={`py-2 px-3 mb-2 bg-white shadow rounded font-semibold flex justify-between items-center ${bg} `}
        onClick={handleClick}>
          <span className="mx-2">Filter by Region </span>
        <IconArrow />{" "}
      </button>

      { isHidden &&
        <div className="flex flex-col shadow rounded-md p-1 bg-white z-50 absolute mt-12 w-40">
        {regions.map((region) => (
          <Options name={region}  key={region} handleClickFilter={handleClickFilter} />
        ))}
      </div>
      }
    </div>
  );
};

export default Button;
