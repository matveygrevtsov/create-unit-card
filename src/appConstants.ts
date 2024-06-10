import { z } from "zod";

export enum EShootDistance {
  Small = "Small",
  Medium = "Medium",
  Large = "Large",
}

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
