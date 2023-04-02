import IconSearch from "../emojis/IconSearch";

const Input = ({word, setWord}) => {
  return (
    <div className="shadow bg-white rounded py-1 h-12 w-1/3 px-3 flex items-center">
      <IconSearch />
      <input
        type="text"
        className="outline-none mx-2"
        placeholder="Search for a country..."
        value={word}
        onChange={(e) => {setWord(e.target.value)}}
      />
    </div>
  );
};

export default Input;
