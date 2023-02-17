import Pagination from "react-responsive-pagination";

type PaginationBarProps = {
  page: number;
  totalPages: number;
  handleOnPageChange: Function;
};

const PaginationBar: React.FC<PaginationBarProps> = (props) => {
  const { page, totalPages, handleOnPageChange } = props;

  const handleOnChange = (page: number) => {
    handleOnPageChange(page);
  };
  return (
    <Pagination
      current={page}
      total={totalPages > 500 ? 500 : totalPages}
      onPageChange={handleOnChange}
    />
  );
};

export default PaginationBar;
