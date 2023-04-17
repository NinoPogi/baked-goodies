import { FormLabel, Text, Textarea } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  name: string
  form: {};
  onChange: Dispatch<SetStateAction<any>>;
  label: string;
}

const DescriptionArea = (props: Props) => {
  const handleInputChange = (event: any) => {
    const value = event.target.value
    props.onChange({ ...props.form, [event.target.name]: value });
  };
  return (
    <>
      <FormLabel>{props.label}</FormLabel>
      <Textarea
        name={props.name}
        onChange={handleInputChange}
        placeholder="Here is a sample placeholder"
        size="sm"
      />
    </>
  );
};

export default DescriptionArea;
