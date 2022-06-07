import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Container from '../components/container/Container';
import Header from '../components/header/Header';

const MovieInfo = lazy(() =>
  import('../views/info/MovieInfo' /* webpackChunkName: "info-view" */),
);
const MovieSearch = lazy(() =>
  import('../views/search/MovieSearch' /* webpackChunkName: "search-movies-view" */),
);
const HomePage = lazy(() =>
  import('../components/home/HomePage' /* webpackChunkName: "home-view" */),
);

export default function App() {
  return (
    <Container>
      <Header />
      <Suspense fallback={<div>Please wait...</div>}>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/movies/:movieId/*' element={< MovieInfo />} />
          <Route path='/movies' element={< MovieSearch />} />
        </Routes>
      </Suspense>
    </Container>
  )
}


