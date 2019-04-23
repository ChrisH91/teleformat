import dialingCodeToCountryCode from "./data/dialing-code-to-country-code";
import INumberPart from "./number-part";

export const enum Part {
  International = "international",
  Local = "local",
  E164 = "e164",
  AreaCode = "areaCode",
  DialingCode = "dialingCode",
  Extension = "extension"
}

const getFilteredPartsText = (
  parts: INumberPart[],
  format: Part,
  filter: (p: INumberPart) => boolean
) =>
  parts.filter(filter).map((p) => p.text(format)).join("");

export default class DecoratedNumber {
  public parts: INumberPart[];

  constructor(parts: INumberPart[]) {
    this.parts = parts;
  }

  get international() {
    return getFilteredPartsText(this.parts, Part.International, (p) => p.international);
  }

  get local() {
    return getFilteredPartsText(this.parts, Part.Local, (p) => p.local);
  }

  get e164() {
    return getFilteredPartsText(this.parts, Part.E164, (p) => p.e164);
  }

  get dialingCode() {
    return getFilteredPartsText(this.parts, Part.DialingCode, (p) => p.dialingCode);
  }

  get areaCode() {
    return getFilteredPartsText(this.parts, Part.AreaCode, (p) => p.areaCode);
  }

  get countryCode() {
    return dialingCodeToCountryCode[`${this.dialingCode}${this.areaCode}`] ||
      dialingCodeToCountryCode[this.dialingCode];
  }

  get extension() {
    return getFilteredPartsText(this.parts, Part.Extension, (p) => p.extension && !p.decorative);
  }
}
