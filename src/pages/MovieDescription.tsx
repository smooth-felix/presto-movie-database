import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MovieDescription: React.FC = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!movieId) {
      navigate("/");
    }
  }, []);

  return (
    <Container>
      <Row className="movie-details mt-5 ">
        <Col md={12} className="movie-details-inner">
          <img
            className="cover-image"
            src="https://image.tmdb.org/t/p/w500/9ZSPIsxI3TZDgfg0Jzk0RZl4INg.jpg"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDescription;
