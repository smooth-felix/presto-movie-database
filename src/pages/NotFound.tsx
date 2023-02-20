import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const NotFound: React.FC = () => {
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate("/");
  };
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="text-center">
        <h1 className="display-1 fw-bold">404</h1>
        <p className="fs-3">
          <span className="text-danger">Opps!</span> Page not found.
        </p>
        <p className="lead">The page you’re looking for doesn’t exist.</p>
        <Button variant="primary" onClick={handleOnClick}>
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
