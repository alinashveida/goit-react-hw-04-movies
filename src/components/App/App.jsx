import AppBar from '../AppBar/AppBar'
import Container from '../Container/Container'
import { Route, Switch } from 'react-router-dom'
import HomeView from '../../views/HomeView'
import MoviesView from '../../views/MoviesView'
import NotFoundView from '../../views/NotFoundView'
import MovieDetailsView from '../../views/MovieDetailsView'

export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route path="/" exact>
          <HomeView></HomeView>
        </Route>

        <Route path="/movies" exact>
          <MoviesView></MoviesView>
        </Route>

        <Route path="/movies/:movieId">
          <MovieDetailsView></MovieDetailsView>
        </Route>

        <Route>
          <NotFoundView></NotFoundView>
        </Route>
      </Switch>
    </Container>
  )
}
