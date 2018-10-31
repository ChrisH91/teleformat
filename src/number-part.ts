export default interface INumberPart {
  decorative: boolean;
  e164: boolean;
  international: boolean;
  local: boolean;
  text: string;
}

export const numberPart = (text) => ({
  decorative: false,
  e164: true,
  international: true,
  local: true,
  text,
});

export const countryCodePart = (text) => ({
  decorative: false,
  e164: true,
  international: true,
  local: false,
  text,
});

export const decorativePart = (text) => ({
  decorative: true,
  e164: false,
  international: true,
  local: true,
  text,
});

export const localDecorativePart = (text) => ({
  decorative: true,
  e164: false,
  international: false,
  local: true,
  text,
});

export const internationalDecorativePart = (text) => ({
  decorative: true,
  e164: false,
  international: true,
  local: false,
  text,
});
