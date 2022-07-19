import { React, lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation/Navigation';


const Home = lazy(() =>
  import('./Pages/Home/Home' )
);
const MovieDetails = lazy(() =>
  import(
    './Pages/MovieDetails/MovieDetails' 
  )
);
const Movies = lazy(() =>
  import('./Pages/Movies/Movies' )
);

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
       
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Navigation />
      <Suspense fallback={<h3>Loading...</h3>}>
        <Routes>
          <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
    </div>
  );
};
