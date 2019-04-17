export default interface INumberPart {
  areaCode: boolean;
  decorative: boolean;
  dialingCode: boolean;
  e164: boolean;
  extension: boolean;
  international: boolean;
  local: boolean;
  text: string | ((format: string) => string);
}

export const numberPart = (text): INumberPart => ({
  areaCode: false,
  decorative: false,
  dialingCode: false,
  e164: true,
  extension: false,
  international: true,
  local: true,
  text,
});

export const extensionPart = (text) => ({
  areaCode: false,
  decorative: false,
  dialingCode: false,
  e164: true,
  extension: true,
  international: true,
  local: true,
  text,
});

export const extensionDecorativePart = (text) => ({
  areaCode: false,
  decorative: true,
  dialingCode: false,
  e164: true,
  extension: true,
  international: true,
  local: true,
  text: (format) => format === "e164" ? "x" : text,
});

export const countryCodePart = (text) => ({
  areaCode: false,
  decorative: false,
  dialingCode: true,
  e164: true,
  extension: false,
  international: true,
  local: false,
  text,
});

export const areaCodePart = (text) => ({
  areaCode: true,
  decorative: false,
  dialingCode: false,
  e164: true,
  extension: false,
  international: true,
  local: true,
  text,
});

export const decorativePart = (text) => ({
  areaCode: false,
  decorative: true,
  dialingCode: false,
  e164: false,
  extension: false,
  international: true,
  local: true,
  text,
});

export const localDecorativePart = (text) => ({
  areaCode: false,
  decorative: true,
  dialingCode: false,
  e164: false,
  extension: false,
  international: false,
  local: true,
  text,
});

export const internationalDecorativePart = (text) => ({
  areaCode: false,
  decorative: true,
  dialingCode: false,
  e164: false,
  extension: false,
  international: true,
  local: false,
  text,
});
