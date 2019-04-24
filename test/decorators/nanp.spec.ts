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

      it("decorates extensions", () => {
        expect(decorator.decorate("15551234567x123").international)
          .toBe("+1 (555) 123-4567 ext. 123");
        expect(decorator.decorate("15551234567x123,456").international)
          .toBe("+1 (555) 123-4567 ext. 123,456");
        expect(decorator.decorate("15551234567x123,456,789").international)
          .toBe("+1 (555) 123-4567 ext. 123,456,789");
        expect(decorator.decorate("15551234567x,,,,3").international)
          .toBe("+1 (555) 123-4567 ext. ,,,,3");
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
        expect(decorator.decorate("15551253658x").international).toBe("+1 (555) 125-3658 ext. ");
        expect(decorator.decorate("15551253658x1").international).toBe("+1 (555) 125-3658 ext. 1");
        expect(decorator.decorate("15551253658x12").international)
          .toBe("+1 (555) 125-3658 ext. 12");
        expect(decorator.decorate("15551253658x123").international)
          .toBe("+1 (555) 125-3658 ext. 123");
      });
    });

    describe("local", () => {
      it("decorates full number", () => {
        expect(decorator.decorate("15551253658").local).toBe("(555) 125-3658");
      });

      it("decorates extensions", () => {
        expect(decorator.decorate("15551234567x123").local).toBe("(555) 123-4567 ext. 123");
        expect(decorator.decorate("15551234567x123,456").local)
          .toBe("(555) 123-4567 ext. 123,456");
        expect(decorator.decorate("15551234567x123,456,789").local)
          .toBe("(555) 123-4567 ext. 123,456,789");
        expect(decorator.decorate("15551234567x,,,,3").local).toBe("(555) 123-4567 ext. ,,,,3");
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
        expect(decorator.decorate("15551253658x").local).toBe("(555) 125-3658 ext. ");
        expect(decorator.decorate("15551253658x1").local).toBe("(555) 125-3658 ext. 1");
        expect(decorator.decorate("15551253658x12").local).toBe("(555) 125-3658 ext. 12");
        expect(decorator.decorate("15551253658x123").local).toBe("(555) 125-3658 ext. 123");
      });
    });

    describe("e164", () => {
      it("returns full number", () => {
        expect(decorator.decorate("15551253658").e164).toBe("15551253658");
      });

      it("decorates extensions", () => {
        expect(decorator.decorate("15551234567x123").e164).toBe("15551234567x123");
        expect(decorator.decorate("15551234567x123,456").e164).toBe("15551234567x123,456");
        expect(decorator.decorate("15551234567x123,456,7").e164).toBe("15551234567x123,456,7");
        expect(decorator.decorate("15551234567x,,,,3").e164).toBe("15551234567x,,,,3");
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
        expect(decorator.decorate("15551253658x").e164).toBe("15551253658x");
        expect(decorator.decorate("15551253658x1").e164).toBe("15551253658x1");
        expect(decorator.decorate("15551253658x12").e164).toBe("15551253658x12");
        expect(decorator.decorate("15551253658x123").e164).toBe("15551253658x123");
      });
    });

    describe("extension", () => {
      it("returns the extension", () => {
        expect(decorator.decorate("15551234567x123").extension).toBe("123");
        expect(decorator.decorate("15551234567x123,456").extension).toBe("123,456");
        expect(decorator.decorate("15551234567x123,456,789").extension).toBe("123,456,789");
        expect(decorator.decorate("15551234567x,,,,3").extension).toBe(",,,,3");
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
