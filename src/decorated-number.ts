import dialingCodeToCountryCode from "./data/dialing-code-to-country-code";
import INumberPart from "./number-part";

const getFilteredPartsText = (parts: INumberPart[], filter: (p: INumberPart) => boolean) =>
  parts.filter(filter).map((p) => p.text).join("");

export default class DecoratedNumber {
  public parts: INumberPart[];

  constructor(parts: INumberPart[]) {
    this.parts = parts;
  }

  get international() {
    return getFilteredPartsText(this.parts, (p) => p.international);
  }

  get local() {
    return getFilteredPartsText(this.parts, (p) => p.local);
  }

  get e164() {
    return getFilteredPartsText(this.parts, (p) => p.e164);
  }

  get dialingCode() {
    return getFilteredPartsText(this.parts, (p) => p.dialingCode);
  }

  get countryCode() {
    return dialingCodeToCountryCode[this.dialingCode];
  }
}
