import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";
import { fetchPopularMovies } from "../redux/actions/actionCreators/moviesActions";
import {
  popularError,
  popularLoading,
  popularMeta,
  popularMovies,
} from "../redux/selectors/moviesSelectors";
import { Result } from "../types/moviesInterfaces";

const PopularMovies: React.FC = () => {
  const dispatch = useDispatch();

  const popularMoviesList = useSelector(popularMovies);
  const popularLoadingStatus = useSelector(popularLoading);
  const popularErrorStatus = useSelector(popularError);
  const popularMetaData = useSelector(popularMeta);

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [movieList, setMovieList] = useState<Array<Result>>([]);

  useEffect(() => {
    dispatch(fetchPopularMovies(1));
  }, []);

  useEffect(() => {
    if (popularMoviesList.length > 0) {
      setMovieList(popularMoviesList);
    }
  }, [popularMoviesList]);

  const handleOnPageChange = (page: number) => {
    setCurrentPage(page);
    dispatch(fetchPopularMovies(page));
  };

  const filterMovieList = (value: string) => {
    var search = new RegExp(value, "i");
    const filteredMovieList = popularMoviesList.filter((movie) =>
      search.test(movie.title)
    );
    setMovieList(filteredMovieList);
  };

  const handleOnSearch = (value: string) => {
    setSearchQuery(value);
    filterMovieList(value);
  };

  return (
    <>
      <div className="mt-3">
        <SearchBar handleSearch={handleOnSearch} />
      </div>
      <MovieList
        currentPage={currentPage}
        error={popularErrorStatus}
        handleOnPageChange={handleOnPageChange}
        loading={popularLoadingStatus}
        metaData={popularMetaData}
        movies={movieList}
      />
    </>
  );
};

export default PopularMovies;
