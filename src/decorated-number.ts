import dialingCodeToCountryCode from "./data/dialing-code-to-country-code";
import INumberPart from "./number-part";

const getFilteredPartsText = (
  parts: INumberPart[],
  format: string,
  filter: (p: INumberPart) => boolean
) =>
  parts.filter(filter).map((p) => typeof p.text === "function" ? p.text(format) : p.text).join("");

export default class DecoratedNumber {
  public parts: INumberPart[];

  constructor(parts: INumberPart[]) {
    this.parts = parts;
  }

  get international() {
    return getFilteredPartsText(this.parts, "international", (p) => p.international);
  }

  get local() {
    return getFilteredPartsText(this.parts, "local", (p) => p.local);
  }

  get e164() {
    return getFilteredPartsText(this.parts, "e164", (p) => p.e164);
  }

  get dialingCode() {
    return getFilteredPartsText(this.parts, "dialingCode", (p) => p.dialingCode);
  }

  get areaCode() {
    return getFilteredPartsText(this.parts, "areaCode", (p) => p.areaCode);
  }

  get countryCode() {
    return dialingCodeToCountryCode[`${this.dialingCode}${this.areaCode}`] ||
      dialingCodeToCountryCode[this.dialingCode];
  }

  get extension() {
    return getFilteredPartsText(this.parts, "extension", (p) => p.extension && !p.decorative);
  }
}
