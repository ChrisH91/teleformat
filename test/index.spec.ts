import teleformat from "../src";

describe("teleformat", () => {
  describe("decorate", () => {
    it("detects countries correctly", () => {
      expect(teleformat.decorate("447555").dialingCode).toBe("44");
      expect(teleformat.decorate("447555").countryCode).toBe("GB");

      expect(teleformat.decorate("1999888").dialingCode).toBe("1");
      expect(teleformat.decorate("1999888").countryCode).toBe("NANP");
    });

    it("returns correct e164 with explicit country", () => {
      expect(teleformat.decorate("5559990000", "NANP").e164).toBe("15559990000");
      expect(teleformat.decorate("15559990000", "NANP").e164).toBe("15559990000");
      expect(teleformat.decorate("07555666666", "GB").e164).toBe("447555666666");

      expect(teleformat.decorate("423", "NO").countryCode).toBe("NO");
      expect(teleformat.decorate("423", "NO").dialingCode).toBe("47");
      expect(teleformat.decorate("423", "NO").local).toBe("423");
      expect(teleformat.decorate("423", "NO").international).toBe("+47 423");
      expect(teleformat.decorate("423", "NO").e164).toBe("47423");
    });

    it("+ overrides explicit country code", () => {
      expect(teleformat.decorate("+44777666", "NANP").countryCode).toBe("GB");
    });

    it("returns decorated numbers", () => {
      expect(teleformat.decorate("61212345678").international).toBe("+61 (02) 1234 5678");
      expect(teleformat.decorate("61212345678x123").international).toBe("+61 (02) 1234 5678 ext. 123");
      expect(teleformat.decorate("15551112222x123").international).toBe("+1 (555) 111-2222 ext. 123");
      expect(teleformat.decorate("1555111df2222x,246").international).toBe("+1 (555) 111-2222 ext. ,246");
      expect(teleformat.decorate("61212345678").local).toBe("(02) 1234 5678");
    });

    it("uses unknown decorator for unknown country codes", () => {
      expect(teleformat.decorate("37512345").international).toBe("+375 12345");
    });

    it("decorates numbers with specific extension formats", () => {
      const extConfig = { decoratedDelimiter: " utsträck. ", delimiter: "u" };

      expect(teleformat.decorate("61212345678", undefined, extConfig).international)
        .toBe("+61 (02) 1234 5678");
      expect(teleformat.decorate("15551112222u123", undefined, extConfig).international)
        .toBe("+1 (555) 111-2222 utsträck. 123");
      expect(teleformat.decorate("1555111df2222u,246", undefined, extConfig).international)
        .toBe("+1 (555) 111-2222 utsträck. ,246");
    });
  });
});
