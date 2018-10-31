export default interface INumberPart {
  decorative: boolean;
  dialingCode: boolean;
  e164: boolean;
  international: boolean;
  local: boolean;
  text: string;
}

export const numberPart = (text): INumberPart => ({
  decorative: false,
  dialingCode: false,
  e164: true,
  international: true,
  local: true,
  text,
});

export const countryCodePart = (text) => ({
  decorative: false,
  dialingCode: true,
  e164: true,
  international: true,
  local: false,
  text,
});

export const decorativePart = (text) => ({
  decorative: true,
  dialingCode: false,
  e164: false,
  international: true,
  local: true,
  text,
});

export const localDecorativePart = (text) => ({
  decorative: true,
  dialingCode: false,
  e164: false,
  international: false,
  local: true,
  text,
});

export const internationalDecorativePart = (text) => ({
  decorative: true,
  dialingCode: false,
  e164: false,
  international: true,
  local: false,
  text,
});
