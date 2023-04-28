import { FormEvent, useEffect, useState } from "react";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Heading,
  ListItem,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import OrderRadio from "./OrderRadio";
import OrderCheckbox from "./OrderCheckbox";

interface Props {
  cake: {
    title: string;
    pricing: string;
    radios: {
      name: string;
      options: { value: string; description: string }[];
      defaultValue: string;
    }[];
    checkboxes: {
      name: string;
      options: { value: string; description: string }[];
    }[];
    info: string[];
  };
}

const CakeForm = ({ cake }: Props) => {
  const [form, setForm] = useState({});

  useEffect(() => {
    setForm({ ...form, type: cake.title });
    cake.radios.map((radio) => {
      setForm((prev) => ({ ...prev, [radio.name]: radio.defaultValue }));
    });
  }, [cake]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    event.preventDefault();
    console.log(form);
  };

  return (
    <Stack spacing="20px">
      <form id="orderForm" onSubmit={handleSubmit}>
        <Stack>
          <Heading fontSize="5xl">{cake.title.toUpperCase()}</Heading>
          <Heading fontSize="2xl">{`price ${cake.pricing}`}</Heading>
        </Stack>
        {cake.radios.map((radio) => (
          <OrderRadio
            radio={radio}
            onChange={(value) => {
              setForm({ ...form, [radio.name]: value });
            }}
          />
        ))}
        {cake.checkboxes.map((checkbox) => (
          <OrderCheckbox
            checkbox={checkbox}
            onChange={(value) => {
              setForm({ ...form, [checkbox.name]: value });
            }}
          />
        ))}

        <Button type="submit" form="orderForm" colorScheme="pink" width="170px">
          OrderYourCakeNow
        </Button>
      </form>

      <Accordion defaultIndex={[0]} allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Heading textAlign="left" flex="1" fontSize="2xl">
              Cake Information
            </Heading>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel pb={4}>
            <UnorderedList>
              {cake.info.map((info) => (
                <ListItem>{info}</ListItem>
              ))}
              <ListItem>🚨 Price Increase Depends on Design & Add-Ons</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
};

export default CakeForm;
