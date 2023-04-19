import { FormLabel, InputGroup, Input, FormControl } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface Props {
  info: {};
  onChange: Dispatch<SetStateAction<any>>;
}

const CustomerInfo = (props: Props) => {
  const handleName = (event: any) => {
    const value = event.target.value;
    props.onChange({
      ...props.info,
      [event.target.name]: value,
    });
  };
  const handleEmail = (event: any) => {
    const value = event.target.value;
    props.onChange({
      ...props.info,
      [event.target.name]: value,
    });
  };
  const handlePhone = (event: any) => {
    const value = event.target.value;
    props.onChange({
      ...props.info,
      [event.target.name]: value,
    });
  };

  return (
    <>
      <FormControl isRequired>
        <FormLabel>Your Name:</FormLabel>
        <InputGroup>
          <Input
            name="name"
            type="text"
            placeholder="example: Hazel"
            onChange={handleName}
          />
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Your Email:</FormLabel>
        <Input
          name="email"
          type="text"
          placeholder="example: bakedgoodies@gmail.com"
          onChange={handleEmail}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Your Phone:</FormLabel>
        <Input
          name="phone"
          type="text"
          placeholder="example: 09771243342"
          onChange={handlePhone}
        />
      </FormControl>
    </>
  );
};

export default CustomerInfo;
