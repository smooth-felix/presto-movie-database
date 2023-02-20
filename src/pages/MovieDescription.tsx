import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useDispatch, useSelector } from "react-redux";
import {
  clearMovie,
  fetchMovie,
} from "../redux/actions/actionCreators/moviesActions";
import {
  movie,
  movieError,
  movieLoading,
} from "../redux/selectors/moviesSelectors";
import Spinner from "../components/spinner/Spinner";
import ErrorToast from "../components/errorToast/ErrorToast";

const MovieDescription: React.FC = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const movieData = useSelector(movie);
  const loading = useSelector(movieLoading);
  const error = useSelector(movieError);

  const isNumeric = (str: string): boolean => {
    return /^\d+$/.test(str);
  };

  useEffect(() => {
    if (!movieId) {
      navigate("/");
    }

    if (movieId) {
      const movieIdInteger = isNumeric(movieId);
      if (movieIdInteger) {
        dispatch(fetchMovie(parseInt(movieId)));
      } else {
        navigate("/");
      }
    }

    return () => {
      dispatch(clearMovie());
    };
  }, []);

  const generateGenres = (): string => {
    if (movieData?.genres) {
      return movieData.genres.map((item) => item.name).join(", ");
    }
    return "";
  };

  const generateCurrency = (value: number): string => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    });

    return formatter.format(value);
  };

  return (
    <Container className="px-0">
      <Spinner loading={loading} />
      <ErrorToast error={error} />
      {movieData && (
        <Row className="movie-details pt-5 ">
          <Col md={12} lg={6} className="movie-details-inner text-center">
            <img
              className="cover-image"
              src={`https://image.tmdb.org/t/p/w500${movieData?.poster_path}`}
            />
          </Col>
          <Col md={12} lg={6} className="movie-details-text">
            <h1 className="text-primary movie-details-text-title">
              {movieData?.title}
            </h1>
            <h5 className="text-info">{generateGenres()}</h5>
            <div className="movie-details-text-subtitle d-flex flex-row justify-content-between">
              <h4 className="text-primary">
                {new Date(movieData?.release_date).getFullYear()}
              </h4>
              <p className="text-info">
                Language: &nbsp;
                <span className="text-primary">
                  {movieData?.original_language}
                </span>{" "}
              </p>
            </div>
            <div className="d-flex flex-row justify-content-between">
              {movieData?.vote_average && (
                <h6 className="text-info">
                  Rating: &nbsp;{" "}
                  <span className="text-primary">
                    {`${movieData.vote_average.toFixed(2)}/ 10`}
                  </span>{" "}
                </h6>
              )}
              {movieData?.revenue && (
                <h6 className="text-info">
                  Revenue: &nbsp;{" "}
                  <span className="text-primary">
                    {generateCurrency(movieData.revenue)}
                  </span>{" "}
                </h6>
              )}
            </div>

            <div className="movie-details-text-description">
              <>
                <h4 className="text-primary">Overview</h4>
                <p className="text-info">
                  {movieData?.overview
                    ? movieData.overview
                    : "No Description Given."}
                </p>
              </>
            </div>
          </Col>
        </Row>
      )}
    </Container>
  );
};

export default MovieDescription;
