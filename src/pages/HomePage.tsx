import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import MovieCard from "../components/MovieCard";

const HomePage: React.FC = () => {
  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <MovieCard
          title="Wakanda Forever"
          description="This is a movie about wakanda"
          imgSrc="https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg"
          key={"wakanda"}
        />
      </Col>
      <Col>
        <MovieCard
          title="Wakanda Forever"
          description="This is a movie about wakanda"
          imgSrc="https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg"
          key={"wakanda"}
        />
      </Col>
    </Row>
  );
};

export default HomePage;
