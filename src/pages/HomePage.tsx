import { useEffect, useState, lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../components/spinner/Spinner";
import {
  clearNowPlayingMovies,
  fetchNowPlayingMovies,
} from "../redux/actions/actionCreators/MoviesActions";
import {
  nowPlayingError,
  nowPlayingLoading,
  nowPlayingMeta,
  nowPlayingMovies,
} from "../redux/selectors/MoviesSelectors";

const MovieList = lazy(() => import("../components/movielist/MovieList"));

const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  const nowPlayingMoviesList = useSelector(nowPlayingMovies);
  const nowPlayingLoadingStatus = useSelector(nowPlayingLoading);
  const nowPlayingErrorStatus = useSelector(nowPlayingError);
  const nowPlayingMetaData = useSelector(nowPlayingMeta);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchNowPlayingMovies(1));

    return () => {
      dispatch(clearNowPlayingMovies());
    };
  }, []);

  const handleOnPageChange = (page: number) => {
    setCurrentPage(page);
    dispatch(fetchNowPlayingMovies(page));
  };

  return (
    <Suspense fallback={<Spinner loading={true} />}>
      <MovieList
        currentPage={currentPage}
        error={nowPlayingErrorStatus}
        handleOnPageChange={handleOnPageChange}
        loading={nowPlayingLoadingStatus}
        metaData={nowPlayingMetaData}
        movies={nowPlayingMoviesList}
      />
    </Suspense>
  );
};

export default HomePage;
