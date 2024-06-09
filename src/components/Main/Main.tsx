import { Flex } from "@mantine/core";
import { z } from "zod";
import { createFormContext, zodResolver } from "@mantine/form";
import { Card } from "../Card/Card";
import { Form } from "../Form/Form";
import { EShootDistance } from "../../appConstants";

import styles from "./styles.module.css";

const attackSchema = z.object({
  name: z.string().optional(),
  damage: z.number().optional(),
  minDiceValue: z.number().optional(),
});

export type TAttack = z.infer<typeof attackSchema>;

const formSchema = z.object({
  name: z.string().optional(),
  hp: z.number().optional(),
  speed: z.number().optional(),
  imageSrc: z.string().optional(),
  shootDistance: z.nativeEnum(EShootDistance).optional(),
  fighting: z.array(attackSchema).optional(),
  shooting: z.array(attackSchema).optional(),
});

export type FormValues = z.infer<typeof formSchema>;

const initialFormValues: FormValues = {};

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
