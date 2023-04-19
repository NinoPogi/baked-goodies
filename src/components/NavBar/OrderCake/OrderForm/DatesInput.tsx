import { Input, FormControl, FormLabel } from "@chakra-ui/react";
import dayjs from "dayjs";
import { Dispatch, SetStateAction } from "react";

interface Props {
  form: {};
  onChange: Dispatch<SetStateAction<any>>;
}

const OrderDates = (props: Props) => {
  const handleDate = (event: any) => {
    const value = event.target.value;
    props.onChange({
      ...props.form,
      [event.target.name]: value,
      orderDate: dayjs().format("YYYY-MM-DD"),
    });
  };

  return (
    <>
      <FormControl>
        <FormLabel>Order Date:</FormLabel>
        <Input type="text" value={dayjs().format("MM/DD/YYYY")} isReadOnly />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Promise Date: </FormLabel>
        <Input
          name="promiseDate"
          type="date"
          placeholder="Promise Date"
          onChange={handleDate}
        />
      </FormControl>
    </>
  );
};

export default OrderDates;
