import { useState } from "react";
import { useRoutes } from "react-router-dom";
import { Flex, Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/ProductPage";
import AccountPage from "./pages/AccountPage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import useCustomer from "./hooks/useCustomer";
import NotFoundPage from "./pages/NotFoundPage";
import OrderModal from "./components/OrderModal";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { customer, setCustomer, error } = useCustomer();
  const [form, setForm] = useState({});

  const element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/shop", element: <ShopPage /> },
    {
      path: "/cakes",
      children: [
        {
          path: ":type",
          element: <ProductPage onOpen={onOpen} setForm={setForm} />,
        },
      ],
    },
    {
      path: "/account",
      element: <AccountPage customer={customer} setCustomer={setCustomer} />,
    },
    {
      path: "/*",
      element: <NotFoundPage />,
    },
  ]);

  return (
    <Grid templateAreas={`"nav" "main" "footer"`} bgColor="navajowhite">
      <GridItem area="nav">
        <NavBar customer={customer} />
      </GridItem>
      <GridItem area="main" px="20px">
        <Flex justify="center">{element}</Flex>
        <OrderModal
          customer={customer}
          isOpen={isOpen}
          onClose={onClose}
          form={form}
          setForm={setForm}
        />
      </GridItem>
      <GridItem area="footer" mt="60px">
        <Footer />
      </GridItem>
    </Grid>
  );
}

export default App;
