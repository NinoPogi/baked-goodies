import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";

interface Props {
  heading: string;
  info: string[];
}

const CakeInfoAccordion = ({ heading, info }: Props) => {
  return (
    <Accordion defaultIndex={[0]} allowToggle>
      <AccordionItem border="none">
        <AccordionButton>
          <Text textAlign="left" flex="1" fontSize="2xl">
            {heading}
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          <UnorderedList>
            {info.map((info) => (
              <ListItem key={info}>{info}</ListItem>
            ))}
          </UnorderedList>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default CakeInfoAccordion;
