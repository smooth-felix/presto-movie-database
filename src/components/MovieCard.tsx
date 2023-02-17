import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

type MovieCardProps = {
  title: string;
  imgSrc: string;
  overview: string;
  releaseDate: Date;
  id: number;
};

// TODO
// replace the image poster with the banner in small Window Sizes.
// style alterations.

const MovieCard: React.FC<MovieCardProps> = (props) => {
  const { title, imgSrc, overview, releaseDate, id } = props;

  const navigate = useNavigate();

  const releasedYear = new Date(releaseDate).getFullYear();

  const truncatedText =
    overview.length === 0
      ? "No description is given."
      : overview.length > 250
      ? overview.substring(0, 250) + "..."
      : overview;

  const handleButtonClick = () => {
    navigate(`/movie/${id}`);
  };

  return (
    <Card className="mt-3 p-2">
      <Row className="no-gutter">
        <Col md={4}>
          <Card.Img src={imgSrc} />
        </Col>
        <Col md={8}>
          <Card.Title className="text-primary movie-title">{title}</Card.Title>
          <p>{releasedYear}</p>
          <Card.Text className="movie-overview">{truncatedText}</Card.Text>
          <Button
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
