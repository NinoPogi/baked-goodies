import { useEffect, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Spinner,
  Textarea,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import apiClient from "../../services/api-client";
import { Order } from "../../hooks/useCustomer";

interface Props {
  order: Order;
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal = ({ order, isOpen, onClose }: Props) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (order.feedback) {
      setRating(order.feedback.rating);
      setComment(order.feedback.comment);
    }
  }, []);

  const handleRatingChange = (value: number) => {
    setRating(value);
  };

  const handleCommentChange = (value: string) => {
    setComment(value);
  };

  const handleSubmit = () => {
    setLoading(true);
    apiClient
      .put(`/order/server/${order._id}`, {
        feedback: {
          comment,
          rating,
        },
      })
      .then(() => {
        setLoading(false);
        onClose();
      });
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
            <Spinner />
          ) : order.payment ? (
            <></>
          ) : (
            <>
              <FormControl>
                <FormLabel>Give Feedback:</FormLabel>
                <Textarea
                  value={comment}
                  onChange={(event) => handleCommentChange(event.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Give Rating:</FormLabel>
                <Box>
                  {[1, 2, 3, 4, 5].map((value) => (
                    <Icon
                      key={value}
                      as={FaStar}
                      color={value <= rating ? "yellow" : "gray"}
                      cursor="pointer"
                      boxSize={6}
                      onClick={() => handleRatingChange(value)}
                    />
                  ))}
                </Box>
              </FormControl>
            </>
          )}
        </ModalBody>
        <ModalFooter>
          <Button onClick={handleSubmit}>Submit</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default FeedbackModal;
