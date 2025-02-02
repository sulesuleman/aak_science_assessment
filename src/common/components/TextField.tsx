import { FC } from "react";
import { FormFeedback, FormGroup, Input, InputProps, Label } from "reactstrap";

interface TextFieldProps extends InputProps {
  errorMessage?: undefined | null | string;
}

const TextField: FC<TextFieldProps> = ({ errorMessage, ...rest }) => {
  return (
    <FormGroup>
      <Label for={rest.name}>First Name</Label>
      <Input {...rest} />

      {errorMessage && <FormFeedback>{errorMessage}</FormFeedback>}
    </FormGroup>
  );
};

export default TextField;
