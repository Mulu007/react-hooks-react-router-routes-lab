import React from "react";
import { movies } from "../data";

function Movies() {
  const movieItems = movies.map((movie) => (
    <div key={movie.title}>
      <h2>Name: {movie.title}</h2>
      <p>Time: {movie.time} Mins</p>
      <h4>Genres:</h4>
      <ul>
        {movie.genres.map(genre => (<li key={genre}>{genre}</li>))}
      </ul>
    </div>
  ))
  return (
  <div>
    <h1>Movies Page</h1>
    <div>{movieItems}</div>
  </div>
  )
}

export default Movies;


