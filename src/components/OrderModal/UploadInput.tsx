import { FormControl, Input } from "@chakra-ui/react";

const UploadInput = () => {
  return (
    <FormControl p="6px">
      or Upload Photo:
      <Input p="6px" variant="unstyled" type="file" />
    </FormControl>
  );
};

export default UploadInput;
