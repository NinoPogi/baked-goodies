import { useState, useLayoutEffect } from "react";
import { useRoutes } from "react-router-dom";
import { Flex, Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import Home from "./pages/Home";
import CakeShop from "./pages/CakeShop";
import CakePage from "./pages/CakePage";
import HelloPage from "./pages/HelloPage";
import OrderModal from "./components/OrderModal";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import apiClient from "./services/api-client";

interface Customer {
  _id: string;
  name: string;
  email: string;
  phone: string;
  orders: string[];
}

interface Order {
  _id: string;
  orderDate: string;
  promiseDate: string;
  customer: Customer;
  type: string;
  flavor: string;
  shape: string;
  size: string;
  digits: string;
  upgrades: string[];
  addons: string[];
  orderDetails: string;
  images: string[];
  status: string;
  isPaid: string;
  payment: string;
}

interface FetchCustomerResponse extends Customer {}
interface FetchOrderResponse extends Array<Order> {}

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [customer, setCustomer] = useState({
    _id: "",
    name: "",
    email: "",
    phone: "",
    orders: [""],
  });
  const [orders, setOrders] = useState<Order[] | undefined>([]);
  const [form, setForm] = useState({});
  const [error, setError] = useState("");

  const element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/cakeshop", element: <CakeShop /> },
    {
      path: "/cakes",
      children: [
        {
          path: ":type",
          element: <CakePage onOpen={onOpen} form={form} setForm={setForm} />,
        },
      ],
    },
    {
      path: "/hello",
      element: (
        <HelloPage
          customer={customer}
          setCustomer={setCustomer}
          orders={orders}
        />
      ),
    },
    {
      path: "/*",
      element: <Home />,
    },
  ]);

  useLayoutEffect(() => {
    apiClient
      .get<FetchCustomerResponse>("/customer")
      .then((res) => {
        setCustomer(res.data);
        const email = res.data.email;
        if (res.data.orders.length !== 0)
          return apiClient.get<FetchOrderResponse>(
            `/order/?customer.email=${email}`
          );
      })
      .then((res) => setOrders(res?.data))
      .catch((err) => setError(err.message));
  }, []);

  return (
    <Grid templateAreas={`"nav" "main" "footer"`} bgColor="teal.100">
      <GridItem area="nav">
        <NavBar customer={customer} />
      </GridItem>
      <GridItem area="main" p="20px 20px" mt={{ base: "66px", lg: "69px" }}>
        {error && <p>{error}</p>}
        <OrderModal
          customer={customer}
          isOpen={isOpen}
          onClose={onClose}
          form={form}
          setForm={setForm}
        />
        <Flex justify="center">{element}</Flex>
      </GridItem>
      <GridItem area="footer" pt="60px">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
