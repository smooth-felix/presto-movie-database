import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DropDown from "../components/dropdown/DropDown";
import MovieList from "../components/movielist/MovieList";
import SearchBar from "../components/searchbar/SearchBar";
import {
  clearConfigurations,
  fetchConfigurations,
} from "../redux/actions/actionCreators/ConfigurationActions";
import {
  clearPopularMovies,
  fetchPopularMovies,
} from "../redux/actions/actionCreators/MoviesActions";
import { genreList } from "../redux/selectors/ConfigurationsSelector";
import {
  popularError,
  popularLoading,
  popularMeta,
  popularMovies,
} from "../redux/selectors/MoviesSelectors";
import { Result } from "../types/MoviesInterfaces";

const PopularMovies: React.FC = () => {
  const dispatch = useDispatch();

  const popularMoviesList = useSelector(popularMovies);
  const popularLoadingStatus = useSelector(popularLoading);
  const popularErrorStatus = useSelector(popularError);
  const popularMetaData = useSelector(popularMeta);

  const genres = useSelector(genreList);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [genre, setGenre] = useState<number | null>(null);
  const [movieList, setMovieList] = useState<Array<Result>>([]);

  useEffect(() => {
    dispatch(fetchPopularMovies(1));
    dispatch(fetchConfigurations());
    return () => {
      dispatch(clearPopularMovies());
      dispatch(clearConfigurations());
    };
  }, []);

  useEffect(() => {
    if (popularMoviesList.length > 0) {
      setMovieList(popularMoviesList);
    }
  }, [popularMoviesList]);

  useEffect(() => {
    filterMovieList();
  }, [searchQuery, genre]);

  const handleOnPageChange = (page: number) => {
    setCurrentPage(page);
    dispatch(fetchPopularMovies(page));
  };

  const filterMovieList = () => {
    var search = new RegExp(searchQuery, "i");
    const filteredMovieList = popularMoviesList.filter((movie) => {
      if (!searchQuery && !genre) return true;
      if (genre === 0) return search.test(movie.title);

      const matchesSearchQuery = !searchQuery || search.test(movie.title);
      const matchesGenre = !genre || movie.genre_ids.includes(genre);

      return matchesSearchQuery && matchesGenre;
    });
    setMovieList(filteredMovieList);
  };

  const handleOnSearch = (value: string) => {
    setSearchQuery(value);
  };

  const handleOnGenreChange = (key: string) => {
    setGenre(parseInt(key, 10));
  };

  return (
    <>
      <div className="mt-3 d-flex flex-row">
        <DropDown
          label="Genre"
          options={[{ id: 0, name: "Any" }, ...genres]}
          onChange={handleOnGenreChange}
        />
        <SearchBar
          label="Search Movies"
          classname="movie-search"
          handleSearch={handleOnSearch}
        />
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
