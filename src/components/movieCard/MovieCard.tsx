import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

export type MovieCardProps = {
  title: string;
  imgSrc: string;
  overview: string;
  releaseDate: Date;
  id: number;
};

const MovieCard: React.FC<MovieCardProps> = (props) => {
  const { title, imgSrc, overview, releaseDate, id } = props;

  const navigate = useNavigate();

  const releasedYear = new Date(releaseDate).getFullYear();

  const truncatedText =
    overview.length === 0 ? "No description is given." : overview;

  const handleButtonClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <Card className="mt-3 p-2">
      <Row className="no-gutter">
        <Col md={4}>
          <Card.Img className="movie-card-image" src={imgSrc} />
        </Col>
        <Col md={8}>
          <Card.Title
            data-testid="movie-title"
            className="text-primary movie-title"
          >
            {title}
          </Card.Title>
          <p data-testid="released-year" className="released-year">
            {releasedYear}
          </p>
          <Card.Text data-testid="movie-overview" className="movie-overview">
            {truncatedText}
          </Card.Text>
          <Button
            data-testid="more-button"
            className="more-button"
            variant="primary"
            onClick={handleButtonClick}
          >
            More...
          </Button>
        </Col>
      </Row>
    </Card>
  );
};

export default MovieCard;
