import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import MovieCard, { Movie } from "./MovieCard";

const MovieList: React.FC = () => {
  const { movies, loading, error } = useSelector((state: RootState) => state.movies);

  if (loading) return <p className="Loading">Loading movies...</p>;
  if (error) return <p>Error: {error}</p>;
  if (!movies || movies.length === 0) return <p>No movies found.</p>;

  return (
    <div className="container mx-auto">
      <table className="movie-table border-collapse w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2 border border-gray-300">Poster</th>
            <th className="p-2 border border-gray-300">Title</th>
            <th className="p-2 border border-gray-300">Year</th>
            <th className="p-2 border border-gray-300">Type</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie: Movie) => (
            <MovieCard key={movie.imdbID} movie={movie} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieList;
