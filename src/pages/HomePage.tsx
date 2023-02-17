import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useDispatch, useSelector } from "react-redux";
import ErrorToast from "../components/ErrorToast";
import MovieCard from "../components/MovieCard";
import PaginationBar from "../components/PaginationBar";
import Spinner from "../components/Spinner";
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

  useEffect(() => {
    dispatch(fetchNowPlayingMovies());
  }, []);

  return (
    <>
      <Row xs={1} xl={2} className="g-4 mb-5">
        <Spinner loading={nowPlayingLoadingStatus} />
        <ErrorToast error={nowPlayingErrorStatus} />
        {nowPlayingMoviesList.map((movie) => (
          <Col key={movie.id}>
            <MovieCard
              releaseDate={movie.release_date}
              title={movie.title}
              overview={movie.overview}
              imgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              key={movie.id}
            />
          </Col>
        ))}
      </Row>
      <Row>
        {nowPlayingMoviesList.length > 0 && (
          <Col xs={12}>
            <PaginationBar page={5} totalPages={10} />
          </Col>
        )}
      </Row>
    </>
  );
};

export default HomePage;
