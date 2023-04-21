import { useLayoutEffect, useState } from "react";
import {
  Box,
  Divider,
  Grid,
  GridItem,
  Hide,
  Show,
  useDisclosure,
} from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import CakePortfolio from "./pages/CakePortfolio";
import CakeShop from "./pages/CakeShop";
import api from "./services/api-client";
import OrderModal from "./components/OrderModal";
import Hero from "./pages/Hero";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [status, setStatus] = useState("ordering");
  const [customer, setCustomer] = useState({
    _id: "",
    name: "",
    email: "",
    phone: "",
    orders: [],
  });
  const [order, setOrder] = useState({
    _id: "",
    orderDate: "",
    promiseDate: "",
    customer: {
      name: "",
      email: "",
      phone: "",
    },
    flavor: "",
    shape: "",
    orderDetails: "",
    images: [],
    payment: "",
  });

  useLayoutEffect(() => {
    const apiCall = async () => {
      const customer = await api.get("/customer");
      setCustomer(customer.data);
      const order = await api.get(`/order/${customer.data.orders[0]}`);
      console.log(order);
      setOrder(order.data);
      if (order.data.status) setStatus(order.data.status);
    };
    apiCall();
  }, [status]);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"aside main" "aside main"`,
      }}
      bgColor={{ base: "transparent", lg: "pink.50" }}
      // p={{
      //   md: "0 45px 0 45px",
      //   lg: "0 80px 0 80px",
      //   xl: "0 150px 0 150px",
      //   "2xl": "0 500px 0 500px",
      // }}
    >
      <Hide above="lg">
        <GridItem area="nav">
          <NavBar onOpen={onOpen} status={status} />
        </GridItem>
      </Hide>
      <Show above="lg">
        <GridItem area="aside" m="15px">
          <SideBar onOpen={onOpen} status={status} />
        </GridItem>
      </Show>
      <GridItem area="main">
        <OrderModal
          customer={customer}
          isOpen={isOpen}
          status={status}
          setStatus={setStatus}
          order={order}
          onClose={onClose}
        />
        <Box bgColor="white" borderRadius="20px" m="15px" p="15px">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route
              path="/cakes"
              element={<CakePortfolio customer={customer} />}
            />
            <Route path="/price" element={<CakeShop />} />
          </Routes>
        </Box>
      </GridItem>
    </Grid>
  );
}

export default App;
