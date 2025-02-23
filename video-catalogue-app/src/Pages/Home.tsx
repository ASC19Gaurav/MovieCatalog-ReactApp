import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchMovies } from "../redux/movieSlice";
import MovieList from "../Components/MovieList";
import SearchBar from "../Components/SearchBar";
import Pagination from "../Components/Pagination";
import Filter from "../Components/Filter"; // Import Filter Component

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);
  const [type, setType] = useState("");
  const [searchTerm, setSearchTerm] = useState("american");

  const totalPages = useAppSelector((state) => state.movies.totalResults);

  useEffect(() => {
    dispatch(fetchMovies({ search: searchTerm, page, type }));
  }, [dispatch, searchTerm, page, type]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-bold mb-4">Video Catalogue App</h1>

      {/* Pass state handlers to SearchBar & Filter */}
      <SearchBar setSearchTerm={setSearchTerm} setPage={setPage} />

      {/* Pagination & Filter on the same line */}
      <div className="pagination-filter-container flex justify-between items-center my-4">
        <Pagination currentPage={page} onPageChange={setPage} totalPages={totalPages} />
        <Filter type={type} setType={setType} setPage={setPage} searchTerm={searchTerm} />
      </div>

      <MovieList />
    </div>
  );
};

export default Home;
