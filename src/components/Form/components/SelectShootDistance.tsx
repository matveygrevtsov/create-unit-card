import { ComboboxData, Input, Select } from "@mantine/core";
import { useFormContext } from "../../Main/Main";
import { EShootDistance } from "../../../appConstants";

const data: ComboboxData = Object.values(EShootDistance);

export const SelectShootDistance = () => {
  const { getInputProps, key } = useFormContext();

  return (
    <Input.Wrapper label="Дальность стрельбы">
      <Select
        {...getInputProps("shootDistance")}
        key={key("shootDistance")}
        data={data}
      />
    </Input.Wrapper>
  );
};
