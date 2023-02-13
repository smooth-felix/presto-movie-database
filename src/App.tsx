import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import BasicLayout from "./layouts/BasicLayout";

const Home = lazy(() => import("./pages/HomePage"));
const Popular = lazy(() => import("./pages/PopularMovies"));

function App() {
  return (
    <div className="App">
      <Routes>
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
