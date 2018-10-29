import decorator from "../../src/decorators/gb";

describe("Decorators", () => {
  describe("GB", () => {
    describe("international", () => {
      it("decorates full number", () => {
        expect(decorator.decorate("4402123456789").international).toBe("+44 (0) 21 2345 6789");
        expect(decorator.decorate("4403331112222").international).toBe("+44 (0) 333 111 2222");
        expect(decorator.decorate("4408001112222").international).toBe("+44 (0) 800 111 2222");
        expect(decorator.decorate("4409001112222").international).toBe("+44 (0) 900 111 2222");
        expect(decorator.decorate("4401112223333").international).toBe("+44 (0) 111 222 3333");
        expect(decorator.decorate("4401312223333").international).toBe("+44 (0) 131 222 3333");
        expect(decorator.decorate("4401512223333").international).toBe("+44 (0) 151 222 3333");
        expect(decorator.decorate("4401387399999").international).toBe("+44 (0) 13873 99999");
        expect(decorator.decorate("4401697499999").international).toBe("+44 (0) 16974 99999");
        expect(decorator.decorate("4401768799999").international).toBe("+44 (0) 17687 99999");
        expect(decorator.decorate("4407777888888").international).toBe("+44 (0) 7777 888888");
        expect(decorator.decorate("4405555222222").international).toBe("+44 (0) 5555 222222");
        expect(decorator.decorate("4401888999999").international).toBe("+44 (0) 1888 999999");
      });

      it("decorates partial number", () => {
        expect(decorator.decorate("440").international).toBe("+44 (0) ");
        expect(decorator.decorate("4401").international).toBe("+44 (0) 1");
        expect(decorator.decorate("44021").international).toBe("+44 (0) 21 ");
        expect(decorator.decorate("440333").international).toBe("+44 (0) 333 ");
        expect(decorator.decorate("440800").international).toBe("+44 (0) 800 ");
        expect(decorator.decorate("440900").international).toBe("+44 (0) 900 ");
        expect(decorator.decorate("440111").international).toBe("+44 (0) 111 ");
        expect(decorator.decorate("440131").international).toBe("+44 (0) 131 ");
        expect(decorator.decorate("44016974").international).toBe("+44 (0) 16974 ");
        expect(decorator.decorate("4407777").international).toBe("+44 (0) 7777 ");
        expect(decorator.decorate("4401387").international).toBe("+44 (0) 1387 ");
        expect(decorator.decorate("44013873").international).toBe("+44 (0) 13873 ");
        expect(decorator.decorate("4407777").international).toBe("+44 (0) 7777 ");
        expect(decorator.decorate("4405555").international).toBe("+44 (0) 5555 ");
        expect(decorator.decorate("4401888").international).toBe("+44 (0) 1888 ");
      });
    });

    describe("local", () => {
      it("decorates full number", () => {
        expect(decorator.decorate("4402123456789").local).toBe("021 2345 6789");
        expect(decorator.decorate("4403331112222").local).toBe("0333 111 2222");
        expect(decorator.decorate("4408001112222").local).toBe("0800 111 2222");
        expect(decorator.decorate("4409001112222").local).toBe("0900 111 2222");
        expect(decorator.decorate("4401112223333").local).toBe("0111 222 3333");
        expect(decorator.decorate("4401312223333").local).toBe("0131 222 3333");
        expect(decorator.decorate("4401512223333").local).toBe("0151 222 3333");
        expect(decorator.decorate("4401387399999").local).toBe("013873 99999");
        expect(decorator.decorate("4401697499999").local).toBe("016974 99999");
        expect(decorator.decorate("4401768799999").local).toBe("017687 99999");
        expect(decorator.decorate("4407777888888").local).toBe("07777 888888");
        expect(decorator.decorate("4405555222222").local).toBe("05555 222222");
        expect(decorator.decorate("4401888999999").local).toBe("01888 999999");
      });

      it("decorates partial number", () => {
        expect(decorator.decorate("440").local).toBe("0");
        expect(decorator.decorate("4401").local).toBe("01");
        expect(decorator.decorate("44021").local).toBe("021 ");
        expect(decorator.decorate("440333").local).toBe("0333 ");
        expect(decorator.decorate("440800").local).toBe("0800 ");
        expect(decorator.decorate("440900").local).toBe("0900 ");
        expect(decorator.decorate("440111").local).toBe("0111 ");
        expect(decorator.decorate("440131").local).toBe("0131 ");
        expect(decorator.decorate("44016974").local).toBe("016974 ");
        expect(decorator.decorate("4407777").local).toBe("07777 ");
        expect(decorator.decorate("4401387").local).toBe("01387 ");
        expect(decorator.decorate("44013873").local).toBe("013873 ");
        expect(decorator.decorate("4407777").local).toBe("07777 ");
        expect(decorator.decorate("4405555").local).toBe("05555 ");
        expect(decorator.decorate("4401888").local).toBe("01888 ");
      });
    });
  });
});
