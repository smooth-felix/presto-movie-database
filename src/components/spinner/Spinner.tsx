import SpinnerLoader from "react-bootstrap/Spinner";

type SpinnerProps = {
  loading: boolean;
};

const Spinner: React.FC<SpinnerProps> = (props) => {
  const { loading } = props;

  if (!loading) return null;

  return (
    <div className="spinner">
      <SpinnerLoader animation="border" role="status" variant="primary" />
    </div>
  );
};

export default Spinner;
