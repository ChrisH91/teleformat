import detectCountry from "../src/detect-country";

describe("detectCountry", () => {
  it("detects simple countries", () => {
    expect(detectCountry("1555")!.countryCode).toBe("NANP");
    expect(detectCountry("447545")!.countryCode).toBe("GB");
    expect(detectCountry("61123")!.countryCode).toBe("AU");
    expect(detectCountry("354123")!.countryCode).toBe("IS");
  });

  it("strips out + before detecting", () => {
    expect(detectCountry("+1")!.countryCode).toBe("NANP");
  });

  it("returns null for unknown countries", () => {
    expect(detectCountry("999")).toBeNull();
  });
});
