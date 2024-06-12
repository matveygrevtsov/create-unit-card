import { z } from "zod";
import { EShootDistance, FormValues } from "./types";

// Базовый URL страницы без слеша на конце
export const URL = (() => {
  const { origin } = window.location;
  return origin.endsWith("/") ? origin.slice(0, -1) : origin;
})();

export const cardId = "cardId";

export const attackSchema = z.object({
  damage: z.number().optional(),
  minDiceValue: z.number().optional(),
});

export const formSchema = z.object({
  name: z.string().optional(),
  hp: z.number().optional(),
  speed: z.number().optional(),
  imageSrc: z.string().optional(),
  shootDistance: z.nativeEnum(EShootDistance).optional(),
  fighting: z.array(attackSchema).optional(),
  shooting: z.array(attackSchema).optional(),
  artilleryRadius: z.number().optional(),
  artilleryPartialHitDamage: z.number().optional(),
  artilleryFullHitDamage: z.number().optional(),
});

export const initialFormValues: FormValues = {
  name: "Гоблин-лучник",
  hp: 3,
  speed: 5,
  imageSrc: `${URL}/example.png`,
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
