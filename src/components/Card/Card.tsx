import { Flex } from "@mantine/core";
import { cardId } from "../../appConstants";
import { Header } from "./components/Header/Header";
import { Body } from "./components/Body/Body";

import styles from "./styles.module.css";

export const Card = () => {
  return (
    <div id={cardId} className={styles.root}>
      <Flex direction={"column"} rowGap={16}>
        <Header />
        <Body />
      </Flex>
    </div>
  );
};
