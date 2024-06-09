import { Input, NumberInput } from "@mantine/core";
import { useFormContext } from "../../Main/Main";

export const HpInput = () => {
  const { key, getInputProps } = useFormContext();

  return (
    <Input.Wrapper label="Здоровье">
      <NumberInput {...getInputProps("hp")} key={key("hp")} min={1} />
    </Input.Wrapper>
  );
};
