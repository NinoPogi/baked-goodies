import { BaseSyntheticEvent, FormEvent, useEffect, useState } from "react";
import { Input, FormControl } from "@chakra-ui/react";
import axios from "axios";
import OrderTextarea from "./OrderForm/OrderTextarea";
import OrderRadio from "./OrderForm/OrderRadio";
import CustomerInfo from "./OrderForm/CustomerInfo";
import DatesInput from "./OrderForm/DatesInput";

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

  const postCustomer = async () => {
    const customer = await axios.post("http://localhost:3000/customer", info);
    return setForm({ ...form, customerId: customer.data._id });

    // const response = await axios.post("http://localhost:3000/order", form);
    // console.log(response);
  };

  const handleImages = (event: BaseSyntheticEvent) => {
    setImages(event.target.files);
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    if (images.length !== 0) {
      for (let file of images) {
        formImages.append("imageUpload", file);
      }
      try {
        const images = await axios.post(
          "http://localhost:3000/upload",
          formImages
        );
        setForm({ ...form, images: images.data });
      } catch (err) {
        alert(err);
      }
    }
    // postCustomer();
    console.log(form);
  };

  return (
    <form id="orderForm" onSubmit={handleSubmit}>
      <FormControl>
        <DatesInput form={form} onChange={setForm} />
        <CustomerInfo info={info} onChange={setInfo} />
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
          position={{ sm: "relative", md: "absolute" }}
          w="230px"
          p="6px"
          variant="unstyled"
          type="file"
          accept=".jpg,.jpeg,.png"
          onChange={handleImages}
          multiple
        />
        <OrderRadio
          name="payment"
          label="Pick payment method for the future:"
          onChange={(event: any) => {
            setForm({ ...form, payment: event });
          }}
          options={["GCash", "BDO"]}
        />
      </FormControl>
    </form>
  );
};

export default OrderModal;
