import { FC } from "react";
import { Flex } from "@mantine/core";
import { useFormContext } from "../../../Main/Main";

import styles from "./styles.module.css";

interface IProps {
  title: string;
  formKey: "shooting" | "fighting";
}

export const AttackTable: FC<IProps> = ({ title, formKey }) => {
  const { values } = useFormContext();

  return (
    <Flex direction="column" rowGap={8}>
      <span className={styles.title}>{title}</span>

      <table className={styles.table}>
        <tr>
          <th>Урон</th>
          <th>Кубик</th>
        </tr>
        {values[formKey]?.map(({ damage, minDiceValue }) => (
          <tr key={damage}>
            <td>{damage}</td>
            <td>{minDiceValue}+</td>
          </tr>
        ))}
      </table>
    </Flex>
  );
};
