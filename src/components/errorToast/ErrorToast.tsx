import { useState } from "react";
import Toast from "react-bootstrap/Toast";
import ToastContainer from "react-bootstrap/ToastContainer";

type ErrorToastProps = {
  error: string | null;
};

const ErrorToast: React.FC<ErrorToastProps> = (props) => {
  const [show, setShow] = useState<boolean>(true);
  const { error } = props;

  const handleOnClose = () => {
    setShow(false);
  };

  if (!error) return null;
  return (
    <ToastContainer position="top-center" className="p-3">
      <Toast
        bg="primary"
        className="text-secondary"
        show={show}
        onClose={handleOnClose}
      >
        <Toast.Header>
          <strong className="me-auto">Something went wrong !!</strong>
          <small></small>
        </Toast.Header>
        <Toast.Body>{error}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ErrorToast;
