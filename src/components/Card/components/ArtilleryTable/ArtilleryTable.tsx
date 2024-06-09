import { Flex } from "@mantine/core";
import { useFormContext } from "../../../Main/Main";

import styles from "./styles.module.css";

export const ArtilleryTable = () => {
  const { values } = useFormContext();

  return (
    <Flex direction="column" rowGap={8}>
      <span className={styles.title}>Артиллерия</span>

      <table className={styles.table}>
        <tr>
          <th>Радиус</th>
          <th>Частичный урон</th>
          <th>Полный урон</th>
        </tr>

        <tr>
          <td>{values.artilleryRadius || "-"}</td>
          <td>{values.artilleryPartialHitDamage || "-"}</td>
          <td>{values.artilleryFullHitDamage || "-"}</td>
        </tr>
      </table>
    </Flex>
  );
};
