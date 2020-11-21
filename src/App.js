import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NewMovie from './pages/NewMovie';
import EditMovie from './pages/EditMovie';
import MovieDetails from './pages/MovieDetails';
import NotFound from './pages/NotFound';
// import MovieLibrary from './components/MovieLibrary';
import MovieList from './pages/MovieList';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/movies/new" component={NewMovie} />
        <Route path="/movies/:id/edit" component={EditMovie} />
        <Route path="/movies/:id" component={MovieDetails} />
        <Route exact path="/" component={MovieList} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
