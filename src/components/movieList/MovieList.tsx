import React from "react";
import ErrorToast from "../errortoast/ErrorToast";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "../spinner/Spinner";
import { MetaData, Result } from "../../types/MoviesInterfaces";
import MovieCard from "../moviecard/MovieCard";
import PaginationBar from "../paginationbar/PaginationBar";
import { PER_PAGE_LIMIT } from "../../utils/Constants";

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
        <ErrorToast error={error} />
        {movies.length !== 0 ? (
          movies.map((movie) => (
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
          ))
        ) : (
          <h4 className="text-primary">No movies are found..</h4>
        )}
      </Row>
      <Spinner loading={true} />
      <Row>
        {movies.length === PER_PAGE_LIMIT && (
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

export default React.memo(MovieList);
