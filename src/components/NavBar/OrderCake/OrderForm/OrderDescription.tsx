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
import api from "../../../../services/api-client";

interface Props {
  name: string;
  form: {};
  setForm: Dispatch<SetStateAction<any>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  label: string;
}

const DescriptionArea = (props: Props) => {
  const [images, setImages] = useState([]);
  const formImages = new FormData();

  const handleInputChange = (event: any) => {
    const value = event.target.value;
    props.setForm({ ...props.form, [event.target.name]: value });
  };

  const handleImages = (event: BaseSyntheticEvent) => {
    setImages(event.target.files);
  };

  const handleUpload = async () => {
    props.setLoading(true);
    for (let file of images) {
      formImages.append("imageUpload", file);
    }
    try {
      const response = await api.post("/upload", formImages);
      props.setForm({ ...props.form, images: response.data });
    } catch (err) {
      alert(err);
    }
    props.setLoading(false);
  };

  return (
    <>
      <FormControl>
        <FormLabel>{props.label}</FormLabel>
        <Textarea
          name={props.name}
          onChange={handleInputChange}
          placeholder="example: Gusto ko po ng cake na ...."
          size="sm"
        />
      </FormControl>
      <FormControl>
        <Text pb="6px">or Upload Photo/s:</Text>
        <Flex>
          <Input
            w="340px"
            p="6px"
            type="file"
            accept=".jpg,.jpeg,.png"
            onChange={handleImages}
            multiple
          />
          {props.loading ? (
            <Button isLoading colorScheme="pink">
              Upload
            </Button>
          ) : (
            <Button onClick={handleUpload} colorScheme="pink">
              Upload
            </Button>
          )}
        </Flex>
      </FormControl>
    </>
  );
};

export default DescriptionArea;
