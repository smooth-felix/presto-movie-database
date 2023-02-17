import Form from "react-bootstrap/Form";

export interface SelectOption {
  id: number | string;
  name: string;
}

type DropDrownProps = {
  options: Array<SelectOption>;
  onChange: Function;
  label?: string;
};

const DropDown: React.FC<DropDrownProps> = (props) => {
  const { options, onChange, label } = props;

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  };
  return (
    <Form>
      {label && <Form.Label className="text-primary">{label}</Form.Label>}
      <Form.Select onChange={handleOnChange}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </Form.Select>
    </Form>
  );
};

export default DropDown;
