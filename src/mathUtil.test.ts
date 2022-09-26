import { add, subtract, multiply, divide } from "./mathUtil";

describe("test add function", () => {
  it("should return 4 for add(2, 2)", () => {
    expect(add(2, 2)).toBe(4);
  });

  it("should return 7 for add(4,3)", () => {
    expect(add(4, 3)).toBe(7);
  });
});

describe("test subtract function", () => {
  it("should return 0 for subtract(2, 2)", () => {
    expect(subtract(2, 2)).toBe(0);
  });

  it("should return 1 for subtract(4,3)", () => {
    expect(subtract(4, 3)).toBe(1);
  });
});

describe("test multiply function", () => {
  it("should return 9 for multiply(3, 3)", () => {
    expect(multiply(3, 3)).toBe(9);
  });

  it("should return 42 for multiply(7,6)", () => {
    expect(multiply(7, 6)).toBe(42);
  });
});

describe("test divide function", () => {
  it("should return 1 for divide(3, 3)", () => {
    expect(divide(3, 3)).toBe(1);
  });

  it("should return 7 for divide(42,6)", () => {
    expect(divide(42, 6)).toBe(7);
  });
});
