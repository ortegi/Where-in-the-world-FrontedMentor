const Options = ({name, handleClickFilter}) => {
  return (
    <button className="py-1 px-2 bg-white hover:bg-slate-300" onClick={()=> handleClickFilter(name)} >
      {name}
    </button>
  );
};

export default Options;
