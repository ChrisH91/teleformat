import decorator from "../../src/decorators";

describe("Decorators", () => {
  it("contains all countries", () => {
    expect(decorator.NANP.decorate("15556667777").international).toBe("+1 (555) 666-7777");
    expect(decorator.GB.decorate("447555666666").international).toBe("+44 (0) 7555 666666");
    expect(decorator.AU.decorate("61255554444").international).toBe("+61 (02) 5555 4444");
  });
});
