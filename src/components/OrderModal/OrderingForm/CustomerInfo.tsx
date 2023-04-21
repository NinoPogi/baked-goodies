import { FormLabel, InputGroup, Input, FormControl } from "@chakra-ui/react";
import { Dispatch, SetStateAction } from "react";

interface Customer {
  name: string;
  email: string;
  phone: string;
}

interface Props {
  customer: Customer;
  info: {};
  onChange: Dispatch<SetStateAction<any>>;
}

const CustomerInfo = ({ customer, info, onChange }: Props) => {
  const handleName = (event: any) => {
    const value = event.target.value;
    onChange({
      ...info,
      [event.target.name]: value,
    });
  };
  const handleEmail = (event: any) => {
    const value = event.target.value;
    onChange({
      ...info,
      [event.target.name]: value,
    });
  };
  const handlePhone = (event: any) => {
    const value = event.target.value;
    onChange({
      ...info,
      [event.target.name]: value,
    });
  };

  let propsName;
  let propsEmail;
  let propsPhone;

  if (customer.name !== "") {
    propsName = {
      value: customer.name,
      isReadOnly: true,
    };
    propsEmail = {
      value: customer.email,
      isReadOnly: true,
    };
    propsPhone = {
      value: customer.phone,
      isReadOnly: true,
    };
  }

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
            {...propsName}
          />
        </InputGroup>
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Your Email Address:</FormLabel>
        <Input
          name="email"
          type="text"
          placeholder="example: bakedgoodies@gmail.com"
          onChange={handleEmail}
          {...propsEmail}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Your Phone Number:</FormLabel>
        <Input
          name="phone"
          type="text"
          placeholder="example: 09771243342"
          onChange={handlePhone}
          {...propsPhone}
        />
      </FormControl>
    </>
  );
};

export default CustomerInfo;
