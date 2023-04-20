import { BaseSyntheticEvent, Dispatch, SetStateAction } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";

interface Props {
  name: string;
  form: {};
  setForm: Dispatch<SetStateAction<any>>;
  label: string;
  handleImages: (event: BaseSyntheticEvent) => void;
}

const DescriptionArea = ({
  name,
  form,
  setForm,
  label,
  handleImages,
}: Props) => {
  // const [images, setImages] = useState([]);

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    setForm({ ...form, [event.target.name]: value });
  };

  // const handleUpload = async () => {
  //   for (let file of images) {
  //     formImages.append("imageUpload", file);
  //   }
  //   try {
  //     const response = await api.post("/upload", formImages);
  //     setForm({ ...form, images: response.data });
  //   } catch (err) {
  //     alert(err);
  //   }
  // };

  return (
    <>
      <FormControl>
        <FormLabel>{label}</FormLabel>
        <Textarea
          name={name}
          onChange={handleInputChange}
          placeholder="example: Gusto ko po ng cake na ...."
          size="sm"
        />
      </FormControl>
      <FormControl>
        <Text pb="6px">or Upload Photo/s:</Text>
        <Flex gap="20px">
          <Input
            w="340px"
            p="6px"
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={handleImages}
            multiple
          />
          {/* <Button onClick={handleUpload} colorScheme="pink">
            Upload
          </Button> */}
        </Flex>
      </FormControl>
    </>
  );
};

export default DescriptionArea;
