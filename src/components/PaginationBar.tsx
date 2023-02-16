import Pagination from "react-bootstrap/Pagination";

type PaginationBarProps = {
  page: number;
  totalPages: number;
};

const PaginationBar: React.FC<PaginationBarProps> = (props) => {
  const { page, totalPages } = props;

  const pageArray = Array.from(Array(totalPages)).map(
    (item, index) => index + 1
  );

  return (
    <Pagination>
      <Pagination.Prev />
      {pageArray.map((item) => (
        <Pagination.Item active={item === page}>{item}</Pagination.Item>
      ))}
      <Pagination.Ellipsis />
      <Pagination.Next />
    </Pagination>
  );
};

export default PaginationBar;
