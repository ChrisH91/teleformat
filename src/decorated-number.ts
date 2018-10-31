import INumberPart from "./number-part";

export default class DecoratedNumber {
  public parts: INumberPart[];

  constructor(parts: INumberPart[]) {
    this.parts = parts;
  }

  get international() {
    return this.parts.filter((p) => p.international).map((p) => p.text).join("");
  }

  get local() {
    return this.parts.filter((p) => p.local).map((p) => p.text).join("");
  }

  get e164() {
    return this.parts.filter((p) => p.e164).map((p) => p.text).join("");
  }
}
