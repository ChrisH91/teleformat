import decorator from "../../src/decorators/au";

describe("Decorators", () => {
  describe("AU", () => {
    describe("international", () => {
      it("decorates full landline number", () => {
        expect(decorator.decorate("610233334444").international).toBe("+61 (02) 3333 4444");
      });

      it("decorates full mobile number", () => {
        expect(decorator.decorate("610433444555").international).toBe("+61 433 444 555");
        expect(decorator.decorate("610533444555").international).toBe("+61 533 444 555");
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
  });
});
