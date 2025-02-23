import React from "react";

export interface Movie {
  imdbID: string;
  Title: string;
  Year: string;
  Poster: string;
  Type: string;
}

const MovieCard: React.FC<{ movie: Movie }> = ({ movie }) => {
  return (
    <tr>
      <td className="p-2 border border-gray-300">
        <img src={movie.Poster} alt={movie.Title} className="w-24 h-32 object-cover" />
      </td>
      <td className="p-2 border border-gray-300 font-bold">{movie.Title}</td>
      <td className="p-2 border border-gray-300">{movie.Year}</td>
      <td className="p-2 border border-gray-300">
        <span className="bg-blue-500 text-white px-2 py-1 text-sm rounded">{movie.Type}</span>
      </td>
    </tr>
  );
};

export default MovieCard;
