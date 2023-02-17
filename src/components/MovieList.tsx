import ErrorToast from "./ErrorToast";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "./Spinner";
import { MetaData, Result } from "../types/moviesInterfaces";
import MovieCard from "./MovieCard";
import PaginationBar from "./PaginationBar";

type MovieListProps = {
  loading: boolean;
  error: string | null;
  movies: Array<Result>;
  currentPage: number;
  metaData: MetaData;
  handleOnPageChange: Function;
};

const MovieList: React.FC<MovieListProps> = (props) => {
  const { loading, error, movies, currentPage, metaData, handleOnPageChange } =
    props;

  return (
    <>
      <Row xs={1} xl={2} className="g-4 pt-4 mb-5">
        <Spinner loading={loading} />
        <ErrorToast error={error} />
        {movies.map((movie) => (
          <Col key={movie.id}>
            <MovieCard
              id={movie.id}
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
        {movies.length === 20 && (
          <Col xs={12}>
            <PaginationBar
              handleOnPageChange={handleOnPageChange}
              page={currentPage}
              totalPages={metaData.total}
            />
          </Col>
        )}
      </Row>
    </>
  );
};

export default MovieList;
