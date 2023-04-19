import { Dispatch, FormEvent, useState } from "react";
import {
  Image,
  Button,
  FormControl,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ModalHeader,
} from "@chakra-ui/react";
import OrderDescription from "./OrderForm/OrderDescription";
import OrderRadio from "./OrderForm/OrderRadio";
import CustomerInfo from "./OrderForm/CustomerInfo";
import DatesInput from "./OrderForm/DatesInput";
import logo from "../../../assets/logo.svg";
import api from "../../../services/api-client";

interface Props {
  loading: boolean;
  setLoading: Dispatch<React.SetStateAction<boolean>>;
}

const OrderModal = ({ loading, setLoading }: Props) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    orderDate: "",
    promiseDate: "",
    customerId: "",
    flavor: "",
    shape: "",
    orderDetails: "",
    images: [],
    payment: "",
  });

  const handleOrder = async (event: FormEvent) => {
    event.preventDefault();
    setLoading(true);
    const response = await api.post("/order", form);
    setLoading(false);
  };

  return (
    <>
      <ModalHeader textAlign="center">
        <Image src={logo} alt="Baked Goodies by H" boxSize="2.3em" />
        <ModalCloseButton />
      </ModalHeader>
      <ModalBody p="5px 30px 0 30px">
        <form id="order" onSubmit={handleOrder}>
          <DatesInput form={form} onChange={setForm} />
          <CustomerInfo info={form} onChange={setForm} />
          <OrderRadio
            label="Pick the Flavors"
            onChange={(event: any) => {
              setForm({ ...form, flavor: event });
            }}
            options={[
              "Vanilla Chiffon",
              "Choco Chiffon",
              "Mocha Chiffon",
              "Ube Chiffon",
              "Choco Moist",
            ]}
          />
          <OrderRadio
            label="Pick the Shape"
            onChange={(event: any) => {
              setForm({ ...form, shape: event });
            }}
            options={["Circle", "Square", "Rectangle"]}
          />
          <OrderDescription
            name="orderDetails"
            label="Describe"
            form={form}
            setForm={setForm}
            loading={loading}
            setLoading={setLoading}
          />

          <OrderRadio
            label="Pick payment method for the future:"
            onChange={(event: any) => {
              setForm({ ...form, payment: event });
            }}
            options={["GCash", "BDO"]}
          />
        </form>
      </ModalBody>
      <ModalFooter>
        {loading ? (
          <Button isLoading colorScheme="pink">
            Submit
          </Button>
        ) : (
          <Button form="order" type="submit" colorScheme="pink">
            Submit
          </Button>
        )}
      </ModalFooter>
    </>
  );
};

export default OrderModal;
