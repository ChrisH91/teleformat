import decorator from "../../src/decorators/nanp";

describe("Decorators", () => {
  describe("NANP", () => {
    describe("international", () => {
      it("decorates full number", () => {
        expect(decorator.decorate("15551253658").international).toBe("+1 (555) 125-3658");
      });

      it("decorates partial number", () => {
        expect(decorator.decorate("15").international).toBe("+1 5");
        expect(decorator.decorate("155").international).toBe("+1 55");
        expect(decorator.decorate("1555").international).toBe("+1 (555) ");
        expect(decorator.decorate("15551").international).toBe("+1 (555) 1");
        expect(decorator.decorate("155512").international).toBe("+1 (555) 12");
        expect(decorator.decorate("1555125").international).toBe("+1 (555) 125-");
        expect(decorator.decorate("15551253").international).toBe("+1 (555) 125-3");
        expect(decorator.decorate("155512536").international).toBe("+1 (555) 125-36");
        expect(decorator.decorate("1555125365").international).toBe("+1 (555) 125-365");
        expect(decorator.decorate("15551253658").international).toBe("+1 (555) 125-3658");
        expect(decorator.decorate("15551253658111").international).toBe("+1 (555) 125-3658111");
      });
    });

    describe("local", () => {
      it("decorates full number", () => {
        expect(decorator.decorate("15551253658").local).toBe("(555) 125-3658");
      });

      it("decorates partial number", () => {
        expect(decorator.decorate("15").local).toBe("5");
        expect(decorator.decorate("155").local).toBe("55");
        expect(decorator.decorate("1555").local).toBe("(555) ");
        expect(decorator.decorate("15551").local).toBe("(555) 1");
        expect(decorator.decorate("155512").local).toBe("(555) 12");
        expect(decorator.decorate("1555125").local).toBe("(555) 125-");
        expect(decorator.decorate("15551253").local).toBe("(555) 125-3");
        expect(decorator.decorate("155512536").local).toBe("(555) 125-36");
        expect(decorator.decorate("1555125365").local).toBe("(555) 125-365");
        expect(decorator.decorate("15551253658").local).toBe("(555) 125-3658");
        expect(decorator.decorate("15551253658111").local).toBe("(555) 125-3658111");
      });
    });
  });
});
