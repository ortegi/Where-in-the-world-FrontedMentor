
import IconMoon from "../emojis/IconMoon"
import IconSun from "../emojis/IconSun";

const Header = ({darkMode, setdarkMode}) => {

  const handleClick = () => {
    setdarkMode(!darkMode)
  }



  return (
    <div className="h-15 p-5 flex justify-between items-center shadow rounded bg-white dark:bg-[#2b3945] dark:text-white transition-all duration-1000">
      <h1 className="font-bold text-lg">Where in the World?</h1>
      <button className="flex justify-between items-center" onClick={handleClick}>
        {
          darkMode ? <IconMoon/> : <IconSun/>
        }
        <p className="font-semibold text-[#111517] dark:text-white mx-2 transition-all duration-1000">DarkMode</p>
      </button>

    </div>
    
  );
};

export default Header;
