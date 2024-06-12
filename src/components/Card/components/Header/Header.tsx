import { Flex } from "@mantine/core";
import { Price } from "../Price/Price";
import { useFormContext } from "../../../Main/Main";

export const Header = () => {
  const { values } = useFormContext();

  return (
    <Flex columnGap={16} justify="space-between" align="center">
      <h1>{values.name || "-"}</h1>
      <Price />
    </Flex>
  );
};
