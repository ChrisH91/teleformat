import decorator from "../../src/decorators/unknown";

describe("Decorators", () => {
  describe("Unknown", () => {

    describe("international", () => {
      it("decorates country code", () => {
        expect(decorator.decorate("15556667777").international).toBe("+1 5556667777");
        expect(decorator.decorate("41111222").international).toBe("+41 111222");
        expect(decorator.decorate("3751234567").international).toBe("+375 1234567");
      });

      it("handles unknown country code", () => {
        expect(decorator.decorate("999123456").international).toBe("+999123456");
      });

      it("handles extensions", () => {
        expect(decorator.decorate("999123456x123").international).toBe("+999123456 ext. 123");
      });
    });

    describe("local", () => {
      it("decorates full number", () => {
        expect(decorator.decorate("15556667777").local).toBe("5556667777");
        expect(decorator.decorate("41111222").local).toBe("111222");
        expect(decorator.decorate("3751234567").local).toBe("1234567");
      });

      it("handles unknown country code", () => {
        expect(decorator.decorate("999123456").local).toBe("999123456");
      });

      it("handles extensions", () => {
        expect(decorator.decorate("999123456x123").local).toBe("999123456 ext. 123");
      });
    });

    describe("e164", () => {
      it("returns full number", () => {
        expect(decorator.decorate("15556667777").e164).toBe("15556667777");
        expect(decorator.decorate("41111222").e164).toBe("41111222");
        expect(decorator.decorate("3751234567").e164).toBe("3751234567");
      });

      it("handles unknown country code", () => {
        expect(decorator.decorate("999123456").e164).toBe("999123456");
      });

      it("handles extensions", () => {
        expect(decorator.decorate("999123456x123").e164).toBe("999123456x123");
      });
    });
  });
});
