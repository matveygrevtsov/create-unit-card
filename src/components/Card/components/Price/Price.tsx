import { Flex } from "@mantine/core";
import { useFormContext } from "../../../Main/Main";
import { IconCoins } from "@tabler/icons-react";
import { getPrice } from "../../../../utils/getPrice";

import styles from "./styles.module.css";

export const Price = () => {
  const { values } = useFormContext();

  return (
    <Flex align={"center"} justify={"center"} columnGap={8}>
      <span className={styles.text}>{getPrice(values)}</span>

      <IconCoins color="yellow" />
    </Flex>
  );
};
