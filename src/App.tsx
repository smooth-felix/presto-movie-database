import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import BasicLayout from "./layout/BasicLayout";

const Home = lazy(() => import("./pages/HomePage"));
const Popular = lazy(() => import("./pages/PopularMovies"));
const MovieDescription = lazy(() => import("./pages/MovieDescription"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="*"
          element={
            <Suspense fallback={<>...</>}>
              <NotFound />
            </Suspense>
          }
        />
        <Route path="/" element={<BasicLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<>...</>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/movie/:movieId"
            element={
              <Suspense fallback={<>...</>}>
                <MovieDescription />
              </Suspense>
            }
          />
          <Route
            path="/popular"
            element={
              <Suspense fallback={<>...</>}>
                <Popular />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
