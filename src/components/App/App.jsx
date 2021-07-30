import { lazy, Suspense } from 'react'
import { Route, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Spinner from '../Spinner/Spinner'

const HomeView = lazy(() =>
  import('../../views/HomeView' /*webpackChunkName: "home-view" */),
)
const AppBar = lazy(() =>
  import('../AppBar/AppBar' /*webpackChunkName: "app-bar" */),
)
const Container = lazy(() =>
  import('../Container/Container' /*webpackChunkName: "container" */),
)
const MoviesView = lazy(() =>
  import('../../views/MoviesView' /*webpackChunkName: "movies-view" */),
)
const NotFoundView = lazy(() =>
  import('../../views/NotFoundView' /*webpackChunkName: "not-found-view" */),
)
const MovieDetailsView = lazy(() =>
  import(
    '../../views/MovieDetailsView' /*webpackChunkName: "movie-details-view" */
  ),
)

export default function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Container>
        <ToastContainer />
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
    </Suspense>
  )
}
