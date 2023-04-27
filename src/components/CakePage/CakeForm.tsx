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
  const handleRadio = (value: string) => {};
  const handleCheckbox = (value: (string | number)[]) => {};

  return (
    <Stack spacing="20px">
      <Stack>
        <Heading fontSize="5xl">{cake.title.toUpperCase()}</Heading>
        <Heading fontSize="2xl">{`price ${cake.pricing}`}</Heading>
      </Stack>
      {cake.radios.map((radio) => (
        <OrderRadio radio={radio} onChange={handleRadio} />
      ))}
      {cake.checkboxes.map((checkbox) => (
        <OrderCheckbox checkbox={checkbox} onChange={handleCheckbox} />
      ))}
      <Button colorScheme="pink" width="170px">
        OrderYourCakeNow
      </Button>
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
