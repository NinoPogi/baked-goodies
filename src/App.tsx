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
import api from "./services/api-client";
import OrderDates from "../old components/OrderModal/OrderingForm/DatesInput";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [customer, setCustomer] = useState({
    _id: "",
    name: "",
    email: "",
    phone: "",
    orders: [],
  });
  const [orders, setOrders] = useState([]);
  const [form, setForm] = useState({});

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
    const apiCall = async () => {
      const customer = await api.get("/customer");
      setCustomer(customer.data);
      if (customer.data.orders.length !== 0) {
        const orders = await api.get(
          `/order/?customer.email=${customer.data.email}`
        );
        console.log(orders);
        setOrders(orders.data);
      }
    };
    apiCall();
  }, []);

  return (
    <Grid templateAreas={`"nav" "main" "footer"`} bgColor="teal.100">
      <GridItem area="nav">
        <NavBar customer={customer} />
      </GridItem>
      <GridItem area="main" p="20px 20px" mt={{ base: "0", lg: "109px" }}>
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
