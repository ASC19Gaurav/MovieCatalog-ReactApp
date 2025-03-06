import React, { useState, useEffect, lazy, Suspense } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { fetchMovies } from "../redux/movieSlice";

// Lazy load components
const MovieList = lazy(() => import("../Components/MovieList"));
const SearchBar = lazy(() => import("../Components/SearchBar"));
const Pagination = lazy(() => import("../Components/Pagination"));
const Filter = lazy(() => import("../Components/Filter"));
const NavBar = lazy(() => import("../Components/Navbar"));

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
    <div>
      <Suspense fallback={<p className="text-center">Loading...</p>}>
        <NavBar /> 
      </Suspense>

      <h1 className="text-center text-2xl font-bold mb-4">Video Catalogue App</h1>

      {/* Lazy load SearchBar */}
      <Suspense fallback={<p className="text-center">Loading Search...</p>}>
        <SearchBar setSearchTerm={setSearchTerm} setPage={setPage} />
      </Suspense>

      <div className="pagination-filter-container flex justify-between items-center my-4">
        <Suspense fallback={<p>Loading Pagination...</p>}>
          <Pagination currentPage={page} onPageChange={setPage} totalPages={totalPages} />
        </Suspense>

        <Suspense fallback={<p>Loading Filters...</p>}>
          <Filter type={type} setType={setType} setPage={setPage} searchTerm={searchTerm} />
        </Suspense>
      </div>

      {/* Lazy load MovieList */}
      <Suspense fallback={<p className="text-center">Loading Movies...</p>}>
        <MovieList />
      </Suspense>
    </div>
  );
};

export default Home;
