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

export default class DecoratedNumber {
  public parts: INumberPart[];

  constructor(parts: INumberPart[]) {
    this.parts = parts;
  }

  private serializeTo(format: Part, filter: (p: INumberPart) => boolean): string {
    return this.parts.filter(filter).map((p) => p.text(format)).join("");
  }

  get international() {
    return this.serializeTo(Part.International, (p) => p.international);
  }

  get local() {
    return this.serializeTo(Part.Local, (p) => p.local);
  }

  get e164() {
    return this.serializeTo(Part.E164, (p) => p.e164);
  }

  get dialingCode() {
    return this.serializeTo(Part.DialingCode, (p) => p.dialingCode);
  }

  get areaCode() {
    return this.serializeTo(Part.AreaCode, (p) => p.areaCode);
  }

  get countryCode() {
    return dialingCodeToCountryCode[`${this.dialingCode}${this.areaCode}`] ||
      dialingCodeToCountryCode[this.dialingCode];
  }

  get extension() {
    return this.serializeTo(Part.Extension, (p) => p.extension && !p.decorative);
  }
}
