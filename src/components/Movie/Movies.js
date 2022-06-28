import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [name, setName] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [desc, setDesc] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const addMovie = e => {
    e.preventDefault();
    const newMovie = {
      id: Math.random(),
      title: name,
      subtitle: subtitle,
      description: desc,
      imageUrl: imageUrl,
      rating: 0,
    };
    setMovies([...movies, newMovie]);
    setName('');
    setSubtitle('');
    setDesc('');
    setImageUrl('');
  };

  const getRating = number => {
    let rating = 0;
    if (number < 0.5) {
      rating = 0;
    }
    if (number < 1.5) {
      rating = 1;
    }
    if (number < 2.5) {
      rating = 2;
    }
    if (number < 3.5) {
      rating = 3;
    }
    if (number < 4.5) {
      rating = 4;
    }
    if (number > 4.5) {
      rating = 5;
    }
    return rating;
  };

  const deleteMovie = id => {
    const newMovieList = movies.filter(movie => movie.id !== id);
    setMovies(newMovieList);
  };

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <form onSubmit={name && subtitle && desc && imageUrl ? addMovie : e => e.preventDefault()}>
        <input type="text" placeholder="add title" value={name} onChange={e => setName(e.target.value)} />
        {!name && <p>Add title</p>}
        <input type="text" placeholder="add subtitle" value={subtitle} onChange={e => setSubtitle(e.target.value)} />
        {!subtitle && <p>Add subtitle</p>}
        <input type="text" placeholder="add description" value={desc} onChange={e => setDesc(e.target.value)} />
        {!desc && <p>Add description</p>}
        <input type="text" placeholder="add imageUrl" value={imageUrl} onChange={e => setImageUrl(e.target.value)} />
        {!imageUrl && <p>Add photo</p>}
        <button type="submit">Add movie</button>
      </form>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} deleteMovie={deleteMovie} getRating={getRating} />
        </div>
      </div>
    </div>
  );
};

export default Movies;
