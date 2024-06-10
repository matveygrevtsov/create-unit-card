import { z } from "zod";
import { attackSchema, formSchema } from "./appConstants";

export type TAttack = z.infer<typeof attackSchema>;

export type FormValues = z.infer<typeof formSchema>;
