import { Flex } from "@mantine/core";
import { createFormContext, zodResolver } from "@mantine/form";
import { Form } from "../Form/Form";
import { formSchema, initialFormValues } from "../../appConstants";
import { FormValues } from "../../types";
import { ActionButtons } from "../ActionButtons/ActionButtons";
import { Card } from "../Card/Card";

import styles from "./styles.module.css";

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
        {/* Левая часть */}
        <Flex className={styles.col}>
          <Form />
        </Flex>

        {/* Правая часть */}
        <Flex
          align="center"
          justify="center"
          className={styles.col}
          rowGap={16}
          direction={"column"}
        >
          <Card />
          <ActionButtons />
        </Flex>
      </Flex>
    </FormProvider>
  );
};
