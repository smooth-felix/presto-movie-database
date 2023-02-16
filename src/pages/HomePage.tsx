import { useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import MovieCard from "../components/MovieCard";
import PaginationBar from "../components/PaginationBar";
import { fetchNowPlayingMovies } from "../redux/actions/actionCreators/moviesActions";

const HomePage: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNowPlayingMovies());
  }, []);

  return (
    <Row xs={1} xl={2} className="g-4">
      <Col>
        <MovieCard
          releaseDate="2022-11-09"
          title="Wakanda Forever"
          overview="Queen Ramonda, Shuri, M’Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T’Challa’s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda."
          imgSrc="https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg"
          key={"wakanda"}
        />
      </Col>
      <Col>
        <MovieCard
          releaseDate="2022-11-09"
          title="Wakanda Forever"
          overview="This is a movie about wakanda"
          imgSrc="https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg"
          key={"wakanda"}
        />
      </Col>
      <PaginationBar page={5} totalPages={10} />
    </Row>
  );
};

export default HomePage;
