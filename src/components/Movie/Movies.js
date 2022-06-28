import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState('');

  const addMovie = e => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      title: name,
      subtitle: name,
      description: name,
      imageUrl: `https://images.unsplash.com/photo-1656373913030-f525af796159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60`,
    };
    setMovies([...movies, newMovie]);
    setName('');
  };

  console.log(movies);

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <form onSubmit={addMovie}>
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
        <button type="submit">Add</button>
      </form>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} addMovie={addMovie} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
