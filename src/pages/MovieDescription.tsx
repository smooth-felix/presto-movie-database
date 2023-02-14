import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const MovieDescription: React.FC = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!movieId) {
      navigate("/");
    }
  }, []);

  return (
    <div>
      <div>This is individual page for a movie</div>
      <div>Press the page with id</div>
    </div>
  );
};

export default MovieDescription;
