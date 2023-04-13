import { Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const DescriptionArea = () => {
  let [value, setValue] = useState("");

  let handleInputChange = (e: any) => {
    let inputValue = e.target.value;
    setValue(inputValue);
    console.log(inputValue);
  };
  return (
    <>
      <Text mb="8px">Value: {value}</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder="Here is a sample placeholder"
        size="sm"
      />
    </>
  );
};

export default DescriptionArea;
