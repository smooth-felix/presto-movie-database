import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../components/MovieList";
import { fetchNowPlayingMovies } from "../redux/actions/actionCreators/moviesActions";
import {
  nowPlayingError,
  nowPlayingLoading,
  nowPlayingMeta,
  nowPlayingMovies,
} from "../redux/selectors/moviesSelectors";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  const nowPlayingMoviesList = useSelector(nowPlayingMovies);
  const nowPlayingLoadingStatus = useSelector(nowPlayingLoading);
  const nowPlayingErrorStatus = useSelector(nowPlayingError);
  const nowPlayingMetaData = useSelector(nowPlayingMeta);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(fetchNowPlayingMovies(1));
  }, []);

  const handleOnPageChange = (page: number) => {
    setCurrentPage(page);
    dispatch(fetchNowPlayingMovies(page));
  };

  return (
    <MovieList
      currentPage={currentPage}
      error={nowPlayingErrorStatus}
      handleOnPageChange={handleOnPageChange}
      loading={nowPlayingLoadingStatus}
      metaData={nowPlayingMetaData}
      movies={nowPlayingMoviesList}
    />
  );
};

export default HomePage;
