import { InputGroup, InputLeftAddon, Input } from "@chakra-ui/react";
import dayjs from "dayjs";
import { Dispatch, SetStateAction } from "react";

interface Props {
  form: {};
  onChange: Dispatch<SetStateAction<any>>;
}

const OrderDates = (props: Props) => {
  const handlePromiseDate = (event: any) => {
    const value = event.target.value;
    props.onChange({ ...props.form, [event.target.name]: value });
  };
  return (
    <InputGroup>
      <InputLeftAddon children="OrderDate" />
      <Input type="text" value={dayjs().format("YYYY-MM-DD")} isReadOnly />
      <InputLeftAddon children="PromiseDate" />
      <Input
        name="promiseDate"
        type="date"
        placeholder="Promise Date"
        onChange={handlePromiseDate}
      />
    </InputGroup>
  );
};

export default OrderDates;
