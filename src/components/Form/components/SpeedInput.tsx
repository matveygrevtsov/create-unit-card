import { Input, NumberInput } from "@mantine/core";
import { useFormContext } from "../../Main/Main";

export const SpeedInput = () => {
  const { key, getInputProps } = useFormContext();

  return (
    <Input.Wrapper label="Скорость">
      <NumberInput {...getInputProps("speed")} key={key("speed")} min={1} />
    </Input.Wrapper>
  );
};
