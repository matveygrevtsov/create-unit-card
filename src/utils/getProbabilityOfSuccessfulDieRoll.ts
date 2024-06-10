export const getProbabilityOfSuccessfulDieRoll = (
  minDieValue: number
): string => {
  const probability = ((7 - minDieValue) * 100) / 6;
  return `${
    Number.isInteger(probability) ? probability : `~${probability.toFixed(2)}`
  }%`;
};
