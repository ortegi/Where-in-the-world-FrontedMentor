import IconSearch from "../emojis/IconSearch";

const Input = ({ word, setWord, darkMode }) => {

  const color = darkMode ? '#FFF': '#111517'

  return (
    <div className="shadow bg-white  dark:bg-[#2b3945] dark:text-white rounded py-1 h-12 w-full md:w-1/3 px-3 flex items-center mb-4">
      <IconSearch color={color} />
      <input
        type="text"
        className="outline-none mx-2 dark:bg-[#2b3945] dark:text-white "
        placeholder="Search for a country..."
        value={word}
        style={{ width: "90%" }}
        onChange={(e) => {
          setWord(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
