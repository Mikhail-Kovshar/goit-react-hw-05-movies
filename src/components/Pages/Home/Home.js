import React, { useEffect, useState } from 'react';
import s from './Home.module.css';
import * as LoadData from '../../LoadData';
import MovieList from 'components/MovieList/MovieList';

export default function Home() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    LoadData.fetchTrendMovies().then(res => setMovies(res.results));
  }, []);
  console.log(movies);
  return (
    movies && (
      <>
        <h2 className={s.title}>Trending today</h2>
        <MovieList moviesData={movies} />
      </>
    )
    
  );
}
