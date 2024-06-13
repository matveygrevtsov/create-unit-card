import { useFormContext } from "../../Main/Main";
import { Flex } from "@mantine/core";
import { Icon } from "./Icon/Icon";

export const MainCharacteristics = () => {
  const { values } = useFormContext();

  return (
    <Flex justify="center" align={"center"} columnGap={16}>
      <Flex columnGap={8} align="center">
        <Icon src="iconHealth.jpg" />

        <span>{values.hp || "-"}</span>
      </Flex>

      <Flex columnGap={8} align="center">
        <Icon src="iconSpeed.jpg" />

        <span>{values.speed || "-"}</span>
      </Flex>

      {values.shootDistance && (
        <Flex columnGap={8} align="center">
          <Icon src="iconBow.jpg" />

          <span>{values.shootDistance}</span>
        </Flex>
      )}
    </Flex>
  );
};
