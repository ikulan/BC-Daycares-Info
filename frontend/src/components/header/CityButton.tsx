function CityButton({ children }) {
  return (
    <button className="group relative m-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-400 p-0.5 text-sm font-medium text-indigo-800 hover:text-white focus:outline-none group-hover:from-indigo-600 group-hover:to-indigo-400">
      <span className="relative rounded-md bg-white px-3 py-2 transition-all duration-75 ease-in group-hover:bg-opacity-0">
        {children}
      </span>
    </button>
  );
}

export default CityButton;
