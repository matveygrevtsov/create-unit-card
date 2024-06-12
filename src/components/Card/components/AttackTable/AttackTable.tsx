import { FC } from "react";
import { Flex } from "@mantine/core";
import { useFormContext } from "../../../Main/Main";
import { getProbabilityOfSuccessfulDieRoll } from "../../../../utils/getProbabilityOfSuccessfulDieRoll";

import styles from "./styles.module.css";

interface IProps {
  title: string;
  formKey: "shooting" | "fighting";
}

export const AttackTable: FC<IProps> = ({ title, formKey }) => {
  const { values } = useFormContext();

  return (
    <Flex direction="column" rowGap={8}>
      <h2>{title}</h2>

      <table className={styles.table}>
        <tr>
          <th>Урон</th>
          <th>Кубик</th>
          <th>Вероятность</th>
        </tr>
        {values[formKey]?.map(({ damage, minDiceValue }) => (
          <tr key={damage}>
            <td>{damage}</td>
            <td>{minDiceValue}+</td>
            <td>
              {minDiceValue === undefined
                ? "-"
                : getProbabilityOfSuccessfulDieRoll(minDiceValue)}
            </td>
          </tr>
        ))}
      </table>
    </Flex>
  );
};
