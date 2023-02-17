import Toast from "react-bootstrap/Toast";

type ErrorToastProps = {
  error: string | null;
};

const ErrorToast: React.FC<ErrorToastProps> = (props) => {
  const { error } = props;
  if (!error) return null;
  return (
    <Toast>
      <Toast.Header>Something went wrong!!</Toast.Header>
      <Toast.Body>{error}</Toast.Body>
    </Toast>
  );
};

export default ErrorToast;
