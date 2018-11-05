import decorator from "../../src/decorators/nanp";

describe("Decorators", () => {
  describe("NANP", () => {
    it("normalizes numbers", () => {
      expect(decorator.decorate("").international).toBe("+1 ");
      expect(decorator.decorate("").local).toBe("");

      expect(decorator.decorate("1754").international).toBe("+1 (754) ");
      expect(decorator.decorate("1754").local).toBe("(754) ");
    });

    describe("international", () => {
      it("decorates full number", () => {
        expect(decorator.decorate("15551253658").international).toBe("+1 (555) 125-3658");
      });

      it("decorates partial number", () => {
        expect(decorator.decorate("1").international).toBe("+1 ");
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
        expect(decorator.decorate("1").local).toBe("");
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

    describe("e164", () => {
      it("returns full number", () => {
        expect(decorator.decorate("15551253658").e164).toBe("15551253658");
      });

      it("returns partial number", () => {
        expect(decorator.decorate("1").e164).toBe("1");
        expect(decorator.decorate("15").e164).toBe("15");
        expect(decorator.decorate("155").e164).toBe("155");
        expect(decorator.decorate("1555").e164).toBe("1555");
        expect(decorator.decorate("15551").e164).toBe("15551");
        expect(decorator.decorate("155512").e164).toBe("155512");
        expect(decorator.decorate("1555125").e164).toBe("1555125");
        expect(decorator.decorate("15551253").e164).toBe("15551253");
        expect(decorator.decorate("155512536").e164).toBe("155512536");
        expect(decorator.decorate("1555125365").e164).toBe("1555125365");
        expect(decorator.decorate("15551253658").e164).toBe("15551253658");
        expect(decorator.decorate("15551253658111").e164).toBe("15551253658111");
      });
    });

    test("country code", () => {
      expect(decorator.decorate("1").countryCode).toBe("NANP");
      expect(decorator.decorate("1415").countryCode).toBe("US");
      expect(decorator.decorate("1306").countryCode).toBe("CA");
      expect(decorator.decorate("1441").countryCode).toBe("BM");
    });
  });
});
