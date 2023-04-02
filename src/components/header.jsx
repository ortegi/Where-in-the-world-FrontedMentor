import IconMoon from "../emojis/IconMoon"


const Header = () => {
  return (
    <div className="h-15 p-5 flex justify-between items-center shadow rounded bg-white">
      <h1 className="font-bold text-lg">Where in the World?</h1>
      <div className="flex justify-between items-center">
        <IconMoon />
        <p className="font-semibold text-gray-700 mx-2">DarkMode</p>
      </div>
    </div>
  );
};

export default Header;
