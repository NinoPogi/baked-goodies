import { Button, Center, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebook, FaTiktok } from "react-icons/fa";

const AboutPage = () => {
  return (
    <VStack>
      <Text>
        Baked goodies has a variety of cakes for a variety of occassions.
        Birthday, wedding, or any other family gathering you name it we bake a
        cake for it! -H
      </Text>
      <Text>
        Baked Goodies by H is a cake business founded by Ms. Marjorie Hazel
        Mercado in July of 2021. Already driven with a passion for baking and
        cooking, Ms. Mercado, together with her reliable oven gifted by her
        parents way back in 2013, took the risk of starting a business in baked
        goods. Originally starting with baked products like buko tarts, milky
        donuts, cheesebread, and ube cheesedesal at the start of the pandemic,
        Ms. Mercado then decided to focus on just cakes by July 2021, which gave
        birth to her current business.
      </Text>

      <Stack spacing={2} align={"center"} maxW={"md"} w={"full"}>
        <Link href={"https://www.facebook.com/BakedGoodiesbyH"} isExternal>
          <Button w={"full"} colorScheme={"facebook"} leftIcon={<FaFacebook />}>
            <Center>
              <Text>Continue on Facebook</Text>
            </Center>
          </Button>
        </Link>
        <Link href={"https://www.instagram.com/bakedgoodiesbyh/"} isExternal>
          <Button w={"full"} bg={"red.400"} leftIcon={<BsInstagram />}>
            <Center>
              <Text>Continue on Instagram</Text>
            </Center>
          </Button>
        </Link>
        <Link href={"https://www.tiktok.com/@bakedgoodiesbyh"} isExternal>
          <Button w={"full"} bg={"red.400"} leftIcon={<FaTiktok />}>
            <Center>
              <Text>Continue on Tiktok</Text>
            </Center>
          </Button>
        </Link>
      </Stack>
    </VStack>
  );
};

export default AboutPage;
