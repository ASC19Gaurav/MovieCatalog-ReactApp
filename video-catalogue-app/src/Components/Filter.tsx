import React from "react";
import { useAppDispatch } from "../app/hooks";
import { fetchMovies } from "../redux/movieSlice";

const Filter: React.FC<{ type: string; setType: (type: string) => void; setPage: (page: number) => void; searchTerm: string }> = ({
  type,
  setType,
  setPage,
  searchTerm,
}) => {
  const dispatch = useAppDispatch();

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedType = event.target.value;
    setType(selectedType);
    setPage(1); // Reset page to 1 when filter changes
    dispatch(fetchMovies({ search: searchTerm, page: 1, type: selectedType }));
  };

  return (
    <div className="filter-container">
      <label htmlFor="filter">Filter by Type:</label>
      <select id="filter" value={type} onChange={handleFilterChange} className="border p-2 rounded">
        <option value="">All</option>
        <option value="movie">Movie</option>
        <option value="series">Series</option>
        <option value="episode">Episode</option>
      </select>
    </div>
  );
};

export default Filter;
