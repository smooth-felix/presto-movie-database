import Pagination from "react-responsive-pagination";
import { useState } from "react";

type PaginationBarProps = {
  page: number;
  totalPages: number;
};

type ChangeEvent = {
  target: {
    name: string;
    value: number;
  };
};

const PaginationBar: React.FC<PaginationBarProps> = (props) => {
  const { page, totalPages } = props;

  const [currentPage, setCurrentPage] = useState<number>(page);

  const handleOnChange = (page: number) => {
    setCurrentPage(page);
  };
  return (
    <Pagination
      current={currentPage}
      total={totalPages}
      onPageChange={handleOnChange}
    />
  );
};

export default PaginationBar;
