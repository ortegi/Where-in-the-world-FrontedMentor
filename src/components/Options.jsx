const Options = ({name, handleClickFilter}) => {
  return (
    <button className="py-1 px-2 bg-white hover:bg-slate-300   dark:bg-[#2b3945] dark:text-white transition-all duration-1000" onClick={()=> handleClickFilter(name)} >
      {name}
    </button>
  );
};

export default Options;
