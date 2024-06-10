import { EShootDistance } from "../appConstants";
import { FormValues, TAttack } from "../types";

export const getPrice = ({
  hp,
  speed,
  shootDistance,
  fighting,
  shooting,
  artilleryRadius,
  artilleryFullHitDamage,
  artilleryPartialHitDamage,
}: FormValues) => {
  let price: number = 0;

  price += hp ? hp * 2 : 0;

  price += speed || 0;

  if (shootDistance) {
    if (shootDistance === EShootDistance.Small) {
      price += 2;
    }

    if (shootDistance === EShootDistance.Medium) {
      price += 5;
    }

    if (shootDistance === EShootDistance.Large) {
      price += 7;
    }
  }

  if (fighting?.length) {
    price += getAttacksPrice(fighting);
  }

  if (shooting?.length) {
    price += getAttacksPrice(shooting);
  }

  if (
    artilleryRadius !== undefined &&
    artilleryFullHitDamage !== undefined &&
    artilleryPartialHitDamage !== undefined
  ) {
    price +=
      2 *
      (artilleryRadius + artilleryFullHitDamage + artilleryPartialHitDamage);
  }

  return price;
};

const getAttacksPrice = (attacks: TAttack[]) => {
  const values = attacks.filter(
    ({ damage, minDiceValue }) =>
      damage !== undefined && minDiceValue !== undefined
  );

  if (!values.length) return 0;

  const minimalDieValue = Math.min(
    ...values.map(({ minDiceValue }) => minDiceValue!)
  );

  const averageDamage = Math.floor(
    values.reduce<number>(
      (accumulator, { damage }) => accumulator + damage!,
      0
    ) / values.length
  );

  return 2 * (6 - minimalDieValue + averageDamage);
};
