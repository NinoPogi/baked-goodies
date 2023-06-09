import { Stack, Text } from "@chakra-ui/react";
import { UseFormGetValues } from "react-hook-form";
import { CakeFormValues, CakeCheckboxValues } from "../../../pages/ProductPage";
import { Cake } from "../../../hooks/useCakes";

interface Props {
  cake: Cake;
  getValues: UseFormGetValues<CakeFormValues>;
}

const OrderReview = ({ cake, getValues }: Props) => {
  return (
    <Stack paddingX="20px">
      <Text fontSize="xl">{cake.title.toUpperCase()}</Text>
      <Text fontSize="xl">Your Selections</Text>
      <ul>
        {cake.radios.map((radio, index) => (
          <li key={index}>
            {radio.name.toUpperCase()}:{" "}
            {getValues(radio.name as keyof CakeFormValues)}
          </li>
        ))}
        {cake.checkboxes.map((checkbox, index) => (
          <li key={index}>
            {checkbox.name.toUpperCase()}:{" "}
            {getValues(checkbox.name as keyof CakeCheckboxValues)
              ? getValues(checkbox.name as keyof CakeCheckboxValues).length ===
                0
                ? "none"
                : getValues(checkbox.name as keyof CakeCheckboxValues)
              : "none"}
          </li>
        ))}
      </ul>
    </Stack>
  );
};

export default OrderReview;
