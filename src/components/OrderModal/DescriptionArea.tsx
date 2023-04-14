import { FormLabel, Text, Textarea } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  description: string;
  setDescription: Dispatch<SetStateAction<string>>;
}

const DescriptionArea = (props: Props) => {
  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    props.setDescription(inputValue);
  };
  return (
    <>
      <FormLabel pt="30px">Describe</FormLabel>
      <Textarea
        value={props.description}
        onChange={handleInputChange}
        placeholder="Here is a sample placeholder"
        size="sm"
      />
    </>
  );
};

export default DescriptionArea;
