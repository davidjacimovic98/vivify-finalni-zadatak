import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';

const getMovies = (movies, setMovies, deleteMovie, getRating) => (
  <div className="card-deck">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} setMovies={setMovies} deleteMovie={deleteMovie} getRating={getRating} />
    ))}
  </div>
);

const MovieList = ({ movies, setMovies, deleteMovie, getRating }) => (
  <div>{getMovies(movies, setMovies, deleteMovie, getRating)}</div>
);

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
