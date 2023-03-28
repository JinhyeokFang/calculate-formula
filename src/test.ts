import { calc } from "./calc";

describe('Hello World!', () => {
  it('Hello World!', () => {
    console.log(calc`30 + (20 - 10) * 5`);
    const number1 = 30;
    const number2 = 2;
    console.log(calc`${number1} ^ ${number2}`);
  });
});
