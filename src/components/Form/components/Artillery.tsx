import { Grid, Input, NumberInput } from "@mantine/core";
import { useFormContext } from "../../Main/Main";

export const Artillery = () => {
  const { key, getInputProps } = useFormContext();

  return (
    <Input.Wrapper label={"Артиллерия"}>
      <Grid columns={3}>
        <Grid.Col span={1}>
          <Input.Wrapper label={"Радиус поражения"}>
            <NumberInput
              key={key("artilleryRadius")}
              {...getInputProps("artilleryRadius")}
              min={1}
            />
          </Input.Wrapper>
        </Grid.Col>

        <Grid.Col span={1}>
          <Input.Wrapper label={"Частичный урон"}>
            <NumberInput
              key={key("artilleryPartialHitDamage")}
              {...getInputProps("artilleryPartialHitDamage")}
              min={0}
            />
          </Input.Wrapper>
        </Grid.Col>

        <Grid.Col span={1}>
          <Input.Wrapper label={"Полный урон"}>
            <NumberInput
              key={key("artilleryFullHitDamage")}
              {...getInputProps("artilleryFullHitDamage")}
              min={1}
            />
          </Input.Wrapper>
        </Grid.Col>
      </Grid>
    </Input.Wrapper>
  );
};
