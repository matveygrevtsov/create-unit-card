import { useFormContext } from "../../Main/Main";
import { Flex } from "@mantine/core";
import { IconArcheryArrow, IconHeart, IconRun } from "@tabler/icons-react";

export const MainCharacteristics = () => {
  const { values } = useFormContext();

  return (
    <Flex justify={"space-around"} align={"center"}>
      <Flex columnGap={8}>
        <IconHeart />

        <span>{values.hp || "-"}</span>
      </Flex>

      <Flex columnGap={8}>
        <IconRun />

        <span>{values.speed || "-"}</span>
      </Flex>

      {values.shootDistance && (
        <Flex columnGap={8}>
          <IconArcheryArrow />

          <span>{values.shootDistance}</span>
        </Flex>
      )}
    </Flex>
  );
};
