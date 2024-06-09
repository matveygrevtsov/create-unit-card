import { Flex } from "@mantine/core";
import { NameInput } from "./components/NameInput";
import { HpInput } from "./components/HpInput";
import { SpeedInput } from "./components/SpeedInput";
import { ImageInput } from "./components/ImageInput";
import { SelectShootDistance } from "./components/SelectShootDistance";
import { Attack } from "./components/Attack";

export const Form = () => {
  return (
    <Flex direction={"column"} rowGap={16} style={{ width: "100%" }}>
      <NameInput />
      <HpInput />
      <SpeedInput />
      <ImageInput />
      <SelectShootDistance />
      <Attack title="Ближний бой" formKey="fighting" />
      <Attack title="Дальний бой" formKey="shooting" />
    </Flex>
  );
};
