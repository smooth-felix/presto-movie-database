import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

type MovieCardProps = {
  title: string;
  imgSrc: string;
  overview: string;
  releaseDate: string;
};

const MovieCard: React.FC<MovieCardProps> = (props) => {
  const { title, imgSrc, overview, releaseDate } = props;

  const releasedYear = new Date(releaseDate).getFullYear();
  return (
    <Card className="mt-3 p-2">
      <Row className="no-gutter">
        <Col md={4}>
          <Card.Img src={imgSrc} />
        </Col>
        <Col md={6}>
          <Card.Title className="text-primary movie-title">{title}</Card.Title>
          <p>{releasedYear}</p>
          <Card.Text>{overview}</Card.Text>
        </Col>
      </Row>
    </Card>
  );
};

export default MovieCard;
