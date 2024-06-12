import { Flex } from "@mantine/core";
import { useFormContext } from "../../../Main/Main";
import { getPrice } from "../../../../utils/getPrice";
import { Icon } from "../Icon/Icon";

export const Price = () => {
  const { values } = useFormContext();

  return (
    <Flex align={"center"} justify={"center"} columnGap={8}>
      <h2>{getPrice(values)}</h2>

      <Icon src="iconCoin.jpg" />
    </Flex>
  );
};
