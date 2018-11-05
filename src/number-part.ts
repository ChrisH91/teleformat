export default interface INumberPart {
  areaCode: boolean;
  decorative: boolean;
  dialingCode: boolean;
  e164: boolean;
  international: boolean;
  local: boolean;
  text: string;
}

export const numberPart = (text): INumberPart => ({
  areaCode: false,
  decorative: false,
  dialingCode: false,
  e164: true,
  international: true,
  local: true,
  text,
});

export const countryCodePart = (text) => ({
  areaCode: false,
  decorative: false,
  dialingCode: true,
  e164: true,
  international: true,
  local: false,
  text,
});

export const areaCodePart = (text) => ({
  areaCode: true,
  decorative: false,
  dialingCode: false,
  e164: true,
  international: true,
  local: true,
  text,
});

export const decorativePart = (text) => ({
  areaCode: false,
  decorative: true,
  dialingCode: false,
  e164: false,
  international: true,
  local: true,
  text,
});

export const localDecorativePart = (text) => ({
  areaCode: false,
  decorative: true,
  dialingCode: false,
  e164: false,
  international: false,
  local: true,
  text,
});

export const internationalDecorativePart = (text) => ({
  areaCode: false,
  decorative: true,
  dialingCode: false,
  e164: false,
  international: true,
  local: false,
  text,
});
