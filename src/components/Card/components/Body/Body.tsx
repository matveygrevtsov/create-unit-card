import { Flex } from "@mantine/core";
import { MainCharacteristics } from "../MainCharacteristics";
import { AttackTable } from "../AttackTable/AttackTable";
import { ArtilleryTable } from "../ArtilleryTable/ArtilleryTable";
import { useFormContext } from "../../../Main/Main";
import { Avatar } from "../Avatar/Avatar";

export const Body = () => {
  const { values } = useFormContext();

  return (
    <Flex columnGap={16}>
      {/* Левая часть */}
      <Flex direction={"column"} rowGap={16}>
        <Avatar />

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

        {(values.artilleryRadius !== undefined ||
          values.artilleryPartialHitDamage !== undefined ||
          values.artilleryFullHitDamage !== undefined) && <ArtilleryTable />}
      </Flex>
    </Flex>
  );
};
