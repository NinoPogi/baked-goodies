import { useContext, useState } from "react";
import {
  Avatar,
  Badge,
  Button,
  HStack,
  Text,
  Spacer,
  useDisclosure,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Input,
  border,
  VStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { FiSearch } from "react-icons/fi";
import { CustomerContext } from "../contexts/CustomerProvider";
import MenuItem from "./MenuItem";
import ThemeSwitcher from "./ThemeSwitcher";
import useCakes from "../hooks/useCakes";

const MenuLinks = () => {
  const { customer, orders } = useContext(CustomerContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { data } = useCakes();
  const cakes = data.filter((obj) => obj.title.includes(search));

  return (
    <>
      <HStack
        display={{ base: "none", xl: "flex" }}
        spacing={{ xl: "20px", "2xl": "40px" }}
      >
        <MenuItem link="/">Home</MenuItem>
        <MenuItem link="/about">About</MenuItem>
        <MenuItem link="/shop">CakeShop</MenuItem>
      </HStack>
      <Spacer />
      <HStack spacing="20px">
        <ThemeSwitcher />
        <Link onClick={onOpen}>
          <FiSearch size="26px" />
        </Link>
        <MenuItem link="/account">
          <Button
            leftIcon={
              <Avatar
                fontFamily="body"
                name={customer.name}
                src={customer.avatar}
                size="xs"
              />
            }
            color="pink.400"
            bg="teal.200"
            borderRadius="20px"
          >
            <HStack>
              <Text
                fontFamily="body"
                display={{ base: "none", xl: "block" }}
                color="black"
              >
                {customer.name ? customer.name : "Account"}
              </Text>
              {orders?.length !== 0 ? (
                <Badge
                  color="teal"
                  bg="pink.200"
                  borderRadius="full"
                  boxSize="24px"
                  fontSize="md"
                >
                  {orders.filter((obj) => obj.isDone === false).length}
                </Badge>
              ) : null}
            </HStack>
          </Button>
        </MenuItem>
      </HStack>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          onClose();
          setSearch("");
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody padding="20px">
            <HStack paddingBottom={search && "30px"}>
              <FiSearch size="26px" />
              <Input
                placeholder="Search Cakes"
                border="none"
                _hover={{ border: "none" }}
                sx={{
                  "&:focus": {
                    boxShadow: "none",
                    border: "none",
                  },
                }}
                onChange={(e) => setSearch(e.target.value)}
              />
            </HStack>
            <VStack>
              {search &&
                cakes.map((cake, index) => (
                  <Button
                    position="relative"
                    width="100%"
                    key={index}
                    onClick={() => {
                      navigate(cake.route);
                      onClose();
                      setSearch("");
                    }}
                  >
                    {cake.title}
                  </Button>
                ))}
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default MenuLinks;
