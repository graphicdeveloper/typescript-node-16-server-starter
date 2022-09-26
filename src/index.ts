import { add, subtract, multiply, divide } from "./mathUtil";

const greet: string = "HELLO, WORLD!";
console.log(`${greet}\n`);

function runLoops(total: number): void {
  for (let i: number = 1; i <= total; i += 1) {
    console.log(`I can loop! -> Count: ${i}`);
  }
  for (let i: number = 1; i <= total; i++) {
    console.log(`I can add! -> ${i} + ${i}: ${add(i, i)}`);
  }
  for (let i: number = 1; i <= total; i++) {
    console.log(`I can multiply! -> 3 x ${i}: ${multiply(3, i)}`);
  }
}

runLoops(3);

const value: number = subtract(divide(multiply(add(21, 19), 3), 2), 18);
const meaning: string = `The meaning of life is... ${value}.`;
console.log(`\n${meaning}\n`);
