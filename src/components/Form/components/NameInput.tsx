import { Input } from "@mantine/core";
import { useFormContext } from "../../Main/Main";

export const NameInput = () => {
  const { key, getInputProps } = useFormContext();

  return (
    <Input.Wrapper label="Имя">
      <Input {...getInputProps("name")} key={key("name")} />
    </Input.Wrapper>
  );
};
