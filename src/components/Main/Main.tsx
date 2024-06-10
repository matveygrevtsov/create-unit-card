import { Flex } from "@mantine/core";
import { createFormContext, zodResolver } from "@mantine/form";
import { Card } from "../Card/Card";
import { Form } from "../Form/Form";
import { EShootDistance, formSchema } from "../../appConstants";
import { getWindowBasePath } from "../../utils/getWindowBasePath";
import { FormValues } from "../../types";

import styles from "./styles.module.css";

export const initialFormValues: FormValues = {
  name: "Гоблин-лучник",
  hp: 3,
  speed: 5,
  imageSrc: `${getWindowBasePath()}/example.jpg`,
  shootDistance: EShootDistance.Medium,
  fighting: [
    {
      damage: 1,
      minDiceValue: 5,
    },
    {
      damage: 2,
      minDiceValue: 6,
    },
  ],
  shooting: [
    {
      damage: 3,
      minDiceValue: 4,
    },
    {
      damage: 4,
      minDiceValue: 5,
    },
    {
      damage: 5,
      minDiceValue: 6,
    },
  ],
};

export const [FormProvider, useFormContext, useForm] =
  createFormContext<FormValues>();

export const Main = () => {
  const form = useForm({
    mode: "controlled",
    validate: zodResolver(formSchema),
    initialValues: initialFormValues,
  });

  return (
    <FormProvider form={form}>
      <Flex>
        <Flex className={styles.col}>
          <Form />
        </Flex>
        <Flex align="center" justify="center" className={styles.col}>
          <Card />
        </Flex>
      </Flex>
    </FormProvider>
  );
};
