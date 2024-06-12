import { z } from "zod";
import { attackSchema, formSchema } from "./appConstants";

export enum EShootDistance {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
}

export type TAttack = z.infer<typeof attackSchema>;

export type FormValues = z.infer<typeof formSchema>;
