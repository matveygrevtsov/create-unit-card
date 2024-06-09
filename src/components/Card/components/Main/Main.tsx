import { forwardRef } from "react";
import { useFormContext } from "../../../Main/Main";
import { Flex } from "@mantine/core";
import { MainCharacteristics } from "../MainCharacteristics";
import { AttackTable } from "../AttackTable/AttackTable";

import styles from "./styles.module.css";

export const Main = forwardRef<HTMLDivElement>((_, ref) => {
  const { values } = useFormContext();

  return (
    <div ref={ref} className={styles.root}>
      <Flex direction={"column"} rowGap={16}>
        <span className={styles.title}>{values.name || "-"}</span>

        <Flex columnGap={16}>
          {/* Левая часть */}
          <Flex direction={"column"} rowGap={16}>
            <div
              className={styles.image}
              style={{
                backgroundImage: `url(${values.imageSrc})`,
              }}
            />

            <MainCharacteristics />
          </Flex>

          {/* Правая часть */}
          <Flex direction={"column"} rowGap={32} justify={"space-around"}>
            {values.fighting?.length !== 0 && (
              <AttackTable title="Ближний бой" formKey="fighting" />
            )}

            {values.shooting?.length !== 0 && (
              <AttackTable title="Дальний бой" formKey="shooting" />
            )}
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
});
