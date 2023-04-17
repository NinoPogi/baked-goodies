import { FormLabel, InputGroup, InputLeftAddon, Input } from "@chakra-ui/react";
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
      <FormLabel>Your Info</FormLabel>
      <InputGroup>
        <InputLeftAddon children="Name" />
        <Input
          name="name"
          type="text"
          placeholder="name"
          onChange={handleName}
        />
      </InputGroup>
      <InputGroup>
        <InputLeftAddon children="Email" />
        <Input
          name="email"
          type="text"
          placeholder="email"
          w="1500px"
          onChange={handleEmail}
        />
        <InputLeftAddon children="Phone" />
        <Input
          name="phone"
          type="text"
          placeholder="phone"
          onChange={handlePhone}
        />
      </InputGroup>
    </>
  );
};

export default CustomerInfo;
