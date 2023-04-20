import { BaseSyntheticEvent, Dispatch, SetStateAction, useState } from "react";
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import api from "../../../services/api-client";

interface Props {
  name: string;
  form: {};
  setForm: Dispatch<SetStateAction<any>>;
  label: string;
}

const DescriptionArea = ({ name, form, setForm, label }: Props) => {
  const [images, setImages] = useState([]);
  const formImages = new FormData();

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    setForm({ ...form, [event.target.name]: value });
  };

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
          <Button onClick={handleUpload} colorScheme="pink">
            Upload
          </Button>
        </Flex>
      </FormControl>
    </>
  );
};

export default DescriptionArea;
