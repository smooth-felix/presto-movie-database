import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

type MovieCardProps = {
  title: string;
  imgSrc: string;
  description: string;
};

const MovieCard: React.FC<MovieCardProps> = (props) => {
  const { title, imgSrc, description } = props;

  return (
    <Card className="mt-3 p-2">
      <Row className="no-gutter">
        <Col md={4}>
          <Card.Img src={imgSrc} />
        </Col>
        <Col md={6}>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Col>
      </Row>
    </Card>
  );
};

export default MovieCard;
