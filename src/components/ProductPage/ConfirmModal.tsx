import { Dispatch, SetStateAction, useContext, useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Heading,
  ModalFooter,
  Button,
  Box,
  ButtonGroup,
  Image,
  Progress,
  Stack,
  Spinner,
} from "@chakra-ui/react";
import { FieldValues, UseFormGetValues, useForm } from "react-hook-form";
import { CakeFormValues } from "../../pages/ProductPage";
import { Cake } from "../../hooks/useCakes";
import OrderCalendar from "./ConfirmModal/OrderCalendar";
import logo from "../../images/logo.svg";
import OrderDetails from "./ConfirmModal/OrderDetails";
import OrderReview from "./ConfirmModal/OrderReview";
import apiClient from "../../services/api-client";

export interface ConfirmFormValues {
  promiseDate: string;
  dedication: string;
  orderDetails: string;
  paymentMethod: string;
  phone: string;
}

interface Props {
  cake: Cake;
  form: {};
  isSubmitting: boolean;
  setIsSubmitting: Dispatch<SetStateAction<boolean>>;

  getValues: UseFormGetValues<CakeFormValues>;
}

const ConfirmModal = ({
  cake,
  form,
  isSubmitting,
  setIsSubmitting,

  getValues,
}: Props) => {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ConfirmFormValues>();

  const handleConfirm = async (data: FieldValues) => {
    const orderForm = { ...form, ...data };
    setIsLoading(true);
    await apiClient.put("/customer", {
      phone: data?.phone,
      paymentMethod: data?.paymentMethod,
    });
    await apiClient.post("/order", orderForm);
    setIsLoading(false);
  };

  return (
    <Modal
      isOpen={isSubmitting}
      onClose={() => setIsSubmitting(false)}
      size="lg"
      motionPreset="slideInBottom"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Stack>
            <Image src={logo} alt="Baked Goodies by H" boxSize="2.3em" />
            <Heading>ConfirmYouOrder</Heading>
            <Progress
              borderRadius="20px"
              hasStripe
              value={progress}
              isAnimated
            />
          </Stack>
        </ModalHeader>
        <ModalBody>
          <form id="confirm" onSubmit={handleSubmit(handleConfirm)}>
            <Box maxWidth={800} p={6} m="10px auto">
              {isLoading ? (
                <>
                  <Heading>Submitting..</Heading>
                  <Spinner />
                </>
              ) : step === 1 ? (
                <OrderReview cake={cake} getValues={getValues} />
              ) : step === 2 ? (
                <OrderCalendar setValue={setValue} />
              ) : (
                <OrderDetails register={register} errors={errors} />
              )}
            </Box>
          </form>
        </ModalBody>
        <ModalFooter>
          <ButtonGroup>
            {step === 1 ? (
              <Button type="button" onClick={() => setIsSubmitting(false)}>
                Cancel
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                variant="solid"
              >
                Back
              </Button>
            )}
            <Button
              onClick={() => {
                setStep(step + 1);
                if (step === 3) {
                  setProgress(100);
                } else {
                  setProgress(progress + 33.33);
                }
              }}
              variant="outline"
              isDisabled={step === 3}
            >
              Next
            </Button>
            {step === 3 ? (
              <Button form="confirm" type="submit" variant="ghost">
                Submit
              </Button>
            ) : null}
          </ButtonGroup>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ConfirmModal;
