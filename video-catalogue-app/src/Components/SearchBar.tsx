import React, { useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { fetchMovies } from "../redux/movieSlice";

const SearchBar: React.FC<{ setSearchTerm: (term: string) => void; setPage: (page: number) => void }> = ({
  setSearchTerm,
  setPage,
}) => {
  const [search, setSearch] = useState("american");
  const dispatch = useAppDispatch();

  const handleSearch = () => {
    setSearchTerm(search);
    setPage(1); // Reset page to 1 on new search
    dispatch(fetchMovies({ search, page: 1, type: "" }));
  };

  return (
    <div className="search-bar text-center">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border p-2"
        placeholder="Search movies..."
      />
      <button onClick={handleSearch} className="bg-blue-500 text-white p-2 ml-2 rounded">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
