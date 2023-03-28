import { evaluate } from 'advanced-calculator';

export function calc(formulaString: string[], ...parameters: number[]) {
  const formula = String.raw({ raw: formulaString }, ...parameters);
  return evaluate(formula);
}
