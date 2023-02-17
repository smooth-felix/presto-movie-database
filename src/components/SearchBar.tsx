import Form from "react-bootstrap/Form";

type SearchBarProps = {
  handleSearch: Function;
};

const SearchBar: React.FC<SearchBarProps> = (props) => {
  const { handleSearch } = props;
  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleSearch(event.target.value);
  };
  return (
    <Form>
      <Form.Control
        type="text"
        placeholder="Search"
        onChange={handleQueryChange}
      />
    </Form>
  );
};

export default SearchBar;
