import {
  BaseSyntheticEvent,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
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
  Text,
  Progress,
  Stack,
  Spinner,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { FieldValues, UseFormGetValues, useForm } from "react-hook-form";
import { CakeFormValues } from "../../pages/ProductPage";
import { Cake } from "../../hooks/useCakes";
import OrderCalendar from "./ConfirmModal/OrderCalendar";
import logo from "../../images/logo.svg";
import OrderDetails from "./ConfirmModal/OrderDetails";
import OrderReview from "./ConfirmModal/OrderReview";
import apiClient from "../../services/api-client";
import { CustomerContext } from "../../contexts/CustomerProvider";
import { useQueryClient } from "react-query";

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

interface StepInstructions {
  1: string;
  2: string;
  3: string;
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
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [stock, setStock] = useState<number>(10);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ConfirmFormValues>();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const stepInstructions = {
    1: "Review Your Order",
    2: "Select Pickup Date",
    3: "Give Cake Details",
  };

  useEffect(() => {
    apiClient.get("/stock").then((res) => {
      setStock(res.data.stock);
    });
  }, []);

  const handleFiles = (e: BaseSyntheticEvent) => {
    const files = e.target.files;
    if (files.length > 5) {
      alert("The maximum number of photo is 5");
      e.target.value = null;
    } else {
      setSelectedFiles(files);
    }
  };

  const handleConfirm = async (data: FieldValues) => {
    const imagesForm = new FormData();
    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        let file = selectedFiles[i];
        imagesForm.append("imageUpload", file);
      }
    }
    setIsSubmitting(true);
    setIsLoading(true);
    try {
      const { data: images } = await apiClient.post("/upload", imagesForm);
      const orderForm = { ...form, ...data, images };
      await apiClient
        .put("/customer", {
          phone: data?.phone,
          paymentMethod: data?.paymentMethod,
        })

        .then((res) => queryClient.setQueryData("/customer", res.data));
      await apiClient
        .post("/order", orderForm)
        .then((res) => {
          navigate("/account");
        })
        .catch((err) => {
          console.log(err);

          alert(err.response.data);
          setIsLoading(false);
        });
    } catch (err) {
      alert(err);
      setIsSubmitting(false);
      setIsLoading(false);
    }

    setIsSubmitting(false);
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
            <Text padding="10px 10px">
              Step {step} of 3:{" "}
              {stepInstructions[step as keyof StepInstructions]}
            </Text>
            {/* <Progress
              borderRadius="20px"
              hasStripe
              value={progress}
              isAnimated
            /> */}
          </Stack>
        </ModalHeader>
        <ModalBody>
          <form id="confirm" onSubmit={handleSubmit(handleConfirm)}>
            <Box maxWidth={800} p={2}>
              {isLoading ? (
                <HStack>
                  <Spinner />
                  <Text>Submitting..</Text>
                </HStack>
              ) : step === 1 ? (
                <OrderReview cake={cake} getValues={getValues} />
              ) : step === 2 ? (
                <OrderCalendar stock={stock} setValue={setValue} />
              ) : (
                <OrderDetails
                  register={register}
                  errors={errors}
                  handleFileUpload={handleFiles}
                />
              )}
            </Box>
          </form>
        </ModalBody>
        <ModalFooter>
          <Text>
            {errors.promiseDate && !watch("promiseDate")
              ? "Select Pickup Date First"
              : null}
          </Text>
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
                isDisabled={step === 1 || isLoading}
                variant="solid"
              >
                Back
              </Button>
            )}
            <Button
              display={step === 3 ? "none" : "block"}
              onClick={() => {
                setStep(step + 1);
                if (step === 3) {
                  setProgress(100);
                } else {
                  setProgress(progress + 33.33);
                }
              }}
              variant="outline"
            >
              Next
            </Button>
            {step === 3 ? (
              <Button
                form="confirm"
                type="submit"
                isDisabled={isLoading}
                variant="outline"
              >
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
