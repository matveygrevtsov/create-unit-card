import { Flex } from "@mantine/core";
import { Price } from "../Price/Price";
import { useFormContext } from "../../../Main/Main";

import styles from "./styles.module.css";

export const Header = () => {
  const { values } = useFormContext();

  return (
    <Flex columnGap={16} justify="space-between" align="center">
      <span className={styles.title}>{values.name || "-"}</span>
      <Price />
    </Flex>
  );
};
