import { BaseSyntheticEvent, FormEvent, useEffect, useState } from "react";
import { Button, Input, FormControl } from "@chakra-ui/react";
import OrderTextarea from "./OrderForm/OrderTextarea";
import OrderRadio from "./OrderForm/OrderRadio";
import CustomerInfo from "./OrderForm/CustomerInfo";
import DatesInput from "./OrderForm/DatesInput";
import api from "../../services/api-client";

const OrderModal = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [form, setForm] = useState({
    promiseDate: "",
    customerId: "",
    flavor: "",
    shape: "",
    orderDetails: "",
    images: [],
    payment: "",
  });
  const [images, setImages] = useState([]);
  const formImages = new FormData();

  const handleImages = (event: BaseSyntheticEvent) => {
    setImages(event.target.files);
  };

  const handleUpload = async () => {
    for (let file of images) {
      formImages.append("imageUpload", file);
    }
    try {
      const response = await api.post("/upload", formImages);
      setForm({ ...form, images: response.data });
    } catch (err) {
      alert(err);
    }
  };

  const handleInfo = async () => {
    const customer = await api.post("/customer", info);
    setForm({ ...form, customerId: customer.data._id });
  };

  const handleOrder = async (event: FormEvent) => {
    event.preventDefault();
    console.log(form);
    const response = await api.post("/order", form);
    console.log(response);
  };

  return (
    <FormControl>
      <form id="order" onSubmit={handleOrder}>
        <CustomerInfo info={info} onChange={setInfo} />
        <Button onClick={handleInfo} colorScheme="pink">
          Submit
        </Button>
        <DatesInput form={form} onChange={setForm} />
        <OrderRadio
          name="flavor"
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
          name="shape"
          label="Pick the Shape"
          onChange={(event: any) => {
            setForm({ ...form, shape: event });
          }}
          options={["Circle", "Square", "Rectangle"]}
        />
        <OrderTextarea
          name="orderDetails"
          label="Describe"
          form={form}
          onChange={setForm}
        />
        or Upload Photo/s:
        <Input
          w="230px"
          p="6px"
          variant="unstyled"
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={handleImages}
          multiple
        />
        <Button onClick={handleUpload} colorScheme="pink">
          Upload
        </Button>
        <OrderRadio
          name="payment"
          label="Pick payment method for the future:"
          onChange={(event: any) => {
            setForm({ ...form, payment: event });
          }}
          options={["GCash", "BDO"]}
        />
      </form>
    </FormControl>
  );
};

export default OrderModal;
