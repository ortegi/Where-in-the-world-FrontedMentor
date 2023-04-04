import { useState } from "react";
import IconArrow from "../emojis/IconArrow";
import Options from "./Options";


const Button = ({handleClickFilter, filtered, setFiltered, darkMode}) => {

  const [isHidden, setIsHidden] = useState(false);
  const color = darkMode ? '#FFF': '#111517'
  const handleClick = () => {
    setIsHidden(!isHidden)
    setFiltered(!filtered)
  };

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const bg = filtered ? 'bg-slate-300 shadow': '';

  return (
    <div className="flex flex-col w-1/2 md:w-1/6">
      <button
        className={`py-2 px-3 md:mb-2 mb-4 bg-white  dark:bg-[#2b3945] dark:text-white shadow rounded font-semibold flex justify-between items-center   ${bg} `}
        onClick={handleClick}>
          <span className="mx-2">All</span>
        <IconArrow color={color} />{" "}
      </button>

      { isHidden &&
        <div className="flex flex-col shadow rounded-md p-1  dark:bg-[#2b3945] dark:text-white  bg-white z-50 absolute mt-[60px] w-[130px] md:mt-12 md:w-40">
        {regions.map((region) => (
          <Options name={region}  key={region} handleClickFilter={handleClickFilter} />
        ))}
      </div>
      }
    </div>
  );
};

export default Button;
