import Form from "react-bootstrap/Form";

type SearchBarProps = {
  handleSearch: Function;
  classname?: string;
  label?: string;
};

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { handleSearch, classname, label } = props;
  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(event.target.value);
  };
  return (
    <Form className={classname}>
      {label && <Form.Label className="text-primary">{label}</Form.Label>}
      <Form.Control
        type="text"
        placeholder="Search Movies"
        onChange={handleQueryChange}
      />
    </Form>
  );
};

export default SearchBar;
