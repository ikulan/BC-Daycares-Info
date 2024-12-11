function SearchBar() {
  return (
    <div className="flex items-center">
      <form action="#" method="GET" className="block pl-2">
        <label htmlFor="topbar-search" className="sr-only">
          Search
        </label>
        <div className="relative md:w-64 md:w-96">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-500 dark:text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="topbar-search"
            className="focus:ring-primary-500 focus:border-primary-500 block w-full rounded-full border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900"
            placeholder="Search"
          />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;