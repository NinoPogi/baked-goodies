import {
  BaseSyntheticEvent,
  FormEvent,
  FormEventHandler,
  useState,
} from "react";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { Order } from "../../hooks/useCustomer";
import apiClient from "../../services/api-client";

interface Props {
  order: Order;
  isOpen: boolean;
  onClose: () => void;
}

const PaymentModal = ({ order, isOpen, onClose }: Props) => {
  const [isLoading, setLoading] = useState(false);
  const [selectedFile, setFile] = useState<File | null>(null);

  const handleFile = (e: BaseSyntheticEvent) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleSubmit = async (e: FormEvent) => {
    const payment = new FormData();
    payment.append("imageUpload", selectedFile as File);
    setLoading(true);

    const { data } = await apiClient.post("/upload", payment);
    const paymentImage = data[0];

    await apiClient.put(`/order/server/${order._id}`, {
      paymentImage,
      status: "paid",
    });
    onClose();
    setLoading(false);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>
          {isLoading ? (
            <FormControl>
              <FormLabel>Upload Proof of Payment:</FormLabel>
              <Spinner />
            </FormControl>
          ) : (
            <FormControl>
              <FormLabel>Upload Proof of Payment:</FormLabel>
              <Text>Please Upload a Valid Receipt Only</Text>
              <Input
                type="file"
                accept=".jpg,.jpeg,.png"
                onChange={handleFile}
              />
            </FormControl>
          )}
        </ModalBody>
        <ModalFooter>
          <Button
            onClick={handleSubmit}
            isDisabled={isLoading || !selectedFile}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default PaymentModal;
