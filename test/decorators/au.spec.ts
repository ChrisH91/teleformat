import decorator from "../../src/decorators/au";

describe("Decorators", () => {
  describe("AU", () => {
    describe("international", () => {
      it("decorates full landline number", () => {
        expect(decorator.decorate("610233334444").international).toBe("+61 (02) 3333 4444");
      });

      it("decorates without the country code", () => {
        expect(decorator.decorate("0233334444").international).toBe("+61 (02) 3333 4444");
      });

      it("decorates full mobile number", () => {
        expect(decorator.decorate("610433444555").international).toBe("+61 433 444 555");
        expect(decorator.decorate("610533444555").international).toBe("+61 533 444 555");
      });

      it("decorates extensions", () => {
        expect(decorator.decorate("610433444555x123").international)
          .toBe("+61 433 444 555 ext. 123");
        expect(decorator.decorate("610433444555x123,456").international)
          .toBe("+61 433 444 555 ext. 123,456");
        expect(decorator.decorate("0233334444x123,456,789").international)
          .toBe("+61 (02) 3333 4444 ext. 123,456,789");
        expect(decorator.decorate("0233334444x,,,,3").international)
          .toBe("+61 (02) 3333 4444 ext. ,,,,3");
      });

      it("decorates partial landline number", () => {
        expect(decorator.decorate("61").international).toBe("+61 ");
        expect(decorator.decorate("610").international).toBe("+61 0");
        expect(decorator.decorate("6102").international).toBe("+61 (02) ");
        expect(decorator.decorate("61023").international).toBe("+61 (02) 3");
        expect(decorator.decorate("610233").international).toBe("+61 (02) 33");
        expect(decorator.decorate("6102333").international).toBe("+61 (02) 333");
        expect(decorator.decorate("61023333").international).toBe("+61 (02) 3333 ");
        expect(decorator.decorate("610233334").international).toBe("+61 (02) 3333 4");
        expect(decorator.decorate("6102333344").international).toBe("+61 (02) 3333 44");
        expect(decorator.decorate("61023333444").international).toBe("+61 (02) 3333 444");
        expect(decorator.decorate("61023333444x").international).toBe("+61 (02) 3333 444 ext. ");
        expect(decorator.decorate("61023333444x1").international).toBe("+61 (02) 3333 444 ext. 1");
        expect(decorator.decorate("61023333444x12").international)
          .toBe("+61 (02) 3333 444 ext. 12");
        expect(decorator.decorate("61023333444x123").international)
          .toBe("+61 (02) 3333 444 ext. 123");
      });

      it("decorates partial mobile number", () => {
        expect(decorator.decorate("6104").international).toBe("+61 4");
        expect(decorator.decorate("61043").international).toBe("+61 43");
        expect(decorator.decorate("610433").international).toBe("+61 433 ");
        expect(decorator.decorate("6104334").international).toBe("+61 433 4");
        expect(decorator.decorate("61043344").international).toBe("+61 433 44");
        expect(decorator.decorate("610433444").international).toBe("+61 433 444 ");
        expect(decorator.decorate("6104334445").international).toBe("+61 433 444 5");
        expect(decorator.decorate("61043344455").international).toBe("+61 433 444 55");

        expect(decorator.decorate("6143").international).toBe("+61 43");
        expect(decorator.decorate("61433").international).toBe("+61 433 ");
        expect(decorator.decorate("614334").international).toBe("+61 433 4");
      });
    });

    describe("local", () => {
      it("decorates full landline number", () => {
        expect(decorator.decorate("610233334444").local).toBe("(02) 3333 4444");
      });

      it("decorates full mobile number", () => {
        expect(decorator.decorate("610433444555").local).toBe("0433 444 555");
        expect(decorator.decorate("610533444555").local).toBe("0533 444 555");
      });

      it("decorates extensions", () => {
        expect(decorator.decorate("610433444555x123").local).toBe("0433 444 555 ext. 123");
        expect(decorator.decorate("610433444555x123,456").local)
          .toBe("0433 444 555 ext. 123,456");
        expect(decorator.decorate("610433444555x123,456,789").local)
          .toBe("0433 444 555 ext. 123,456,789");
        expect(decorator.decorate("610433444555x,,,,3").local).toBe("0433 444 555 ext. ,,,,3");
      });

      it("decorates partial landline number", () => {
        expect(decorator.decorate("61").local).toBe("");
        expect(decorator.decorate("610").local).toBe("0");
        expect(decorator.decorate("6102").local).toBe("(02) ");
        expect(decorator.decorate("61023").local).toBe("(02) 3");
        expect(decorator.decorate("610233").local).toBe("(02) 33");
        expect(decorator.decorate("6102333").local).toBe("(02) 333");
        expect(decorator.decorate("61023333").local).toBe("(02) 3333 ");
        expect(decorator.decorate("610233334").local).toBe("(02) 3333 4");
        expect(decorator.decorate("6102333344").local).toBe("(02) 3333 44");
        expect(decorator.decorate("61023333444").local).toBe("(02) 3333 444");
      });

      it("decorates partial mobile number", () => {
        expect(decorator.decorate("610").local).toBe("0");
        expect(decorator.decorate("6104").local).toBe("04");
        expect(decorator.decorate("61043").local).toBe("043");
        expect(decorator.decorate("610433").local).toBe("0433 ");
        expect(decorator.decorate("6104334").local).toBe("0433 4");
        expect(decorator.decorate("61043344").local).toBe("0433 44");
        expect(decorator.decorate("610433444").local).toBe("0433 444 ");
        expect(decorator.decorate("6104334445").local).toBe("0433 444 5");
        expect(decorator.decorate("61043344455").local).toBe("0433 444 55");
      });
    });

    describe("e164", () => {
      it("returns full number", () => {
        expect(decorator.decorate("610233334444").e164).toBe("61233334444");
      });

      it("decorates extensions", () => {
        expect(decorator.decorate("610233334444x123").e164).toBe("61233334444x123");
        expect(decorator.decorate("610233334444x123,456").e164).toBe("61233334444x123,456");
        expect(decorator.decorate("610233334444x123,456,7").e164).toBe("61233334444x123,456,7");
        expect(decorator.decorate("610233334444x,,,,3").e164).toBe("61233334444x,,,,3");
      });

      it("returns partial number", () => {
        expect(decorator.decorate("61").e164).toBe("61");
        expect(decorator.decorate("610").e164).toBe("61");
        expect(decorator.decorate("6102").e164).toBe("612");
        expect(decorator.decorate("61023").e164).toBe("6123");
        expect(decorator.decorate("610233").e164).toBe("61233");
        expect(decorator.decorate("6102333").e164).toBe("612333");
        expect(decorator.decorate("61023333").e164).toBe("6123333");
        expect(decorator.decorate("610233334").e164).toBe("61233334");
        expect(decorator.decorate("6102333344").e164).toBe("612333344");
        expect(decorator.decorate("61023333444").e164).toBe("6123333444");
      });
    });
  });
});
