import { FC } from "react";
import { Input } from "@mantine/core";
import { useFormContext } from "../../../Main/Main";

import styles from "./styles.module.css";

interface IProps {
  title: string;
  formKey: "shooting" | "fighting";
}

export const AttackTable: FC<IProps> = ({ title, formKey }) => {
  const { values } = useFormContext();

  return (
    <Input.Wrapper label={title}>
      <table className={styles.table}>
        <tr>
          <th>Наименование</th>
          <th>Урон</th>
          <th>Кубик</th>
        </tr>
        {values[formKey]?.map(({ name, damage, minDiceValue }) => (
          <tr key={name}>
            <td>{name}</td>
            <td>{damage}</td>
            <td>{minDiceValue}+</td>
          </tr>
        ))}
      </table>
    </Input.Wrapper>
  );
};
