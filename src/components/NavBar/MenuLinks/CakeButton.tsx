import { Button } from "@chakra-ui/react";
import {
  GiCakeSlice,
  GiTimeSynchronization,
  GiMoneyStack,
} from "react-icons/gi";

interface Props {
  status: string;
  onOpen: () => void;
}

const CakeButton = ({ status, onOpen }: Props) => {
  let buttonIcon;
  let buttonLabel;

  if (status === "ordering") {
    buttonIcon = <GiCakeSlice />;
    buttonLabel = "OrderYourCakeNow";
  } else if (status === "processing") {
    buttonIcon = <GiTimeSynchronization />;
    buttonLabel = "WaitYourCakeNow";
  } else if (status === "fullfilling") {
    buttonIcon = <GiTimeSynchronization />;
    buttonLabel = "WaitYourCakeNow";
  } else if (status === "paying") {
    buttonIcon = <GiMoneyStack />;
    buttonLabel = "PayYourCakeNow";
  }

  return (
    <>
      <Button
        leftIcon={buttonIcon}
        colorScheme="pink"
        variant="solid"
        onClick={onOpen}
      >
        {buttonLabel}
      </Button>
    </>
  );
};

export default CakeButton;
