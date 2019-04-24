import { Part } from "./decorated-number";
import { IExtensionConfig } from "./extension-config";

export default interface INumberPart {
  areaCode: boolean;
  decorative: boolean;
  dialingCode: boolean;
  e164: boolean;
  extension: boolean;
  international: boolean;
  local: boolean;
  text: (format?: string) => string;
}

export const numberPart = (text: string | number): INumberPart => ({
  areaCode: false,
  decorative: false,
  dialingCode: false,
  e164: true,
  extension: false,
  international: true,
  local: true,
  text: () => text.toString(),
});

export const extensionPart = (text: number | string): INumberPart => ({
  areaCode: false,
  decorative: false,
  dialingCode: false,
  e164: true,
  extension: true,
  international: true,
  local: true,
  text: () => text.toString(),
});

export const extensionDecorativePart = (config: IExtensionConfig): INumberPart => ({
  areaCode: false,
  decorative: true,
  dialingCode: false,
  e164: true,
  extension: true,
  international: true,
  local: true,
  text: (format: Part) => format === Part.E164 ? config.delimiter : config.decoratedDelimiter,
});

export const countryCodePart = (text: string): INumberPart => ({
  areaCode: false,
  decorative: false,
  dialingCode: true,
  e164: true,
  extension: false,
  international: true,
  local: false,
  text: () => text,
});

export const areaCodePart = (text: string): INumberPart => ({
  areaCode: true,
  decorative: false,
  dialingCode: false,
  e164: true,
  extension: false,
  international: true,
  local: true,
  text: () => text,
});

export const decorativePart = (text: string): INumberPart => ({
  areaCode: false,
  decorative: true,
  dialingCode: false,
  e164: false,
  extension: false,
  international: true,
  local: true,
  text: () => text,
});

export const localDecorativePart = (text: string | number): INumberPart => ({
  areaCode: false,
  decorative: true,
  dialingCode: false,
  e164: false,
  extension: false,
  international: false,
  local: true,
  text: () => text.toString(),
});

export const internationalDecorativePart = (text: string): INumberPart => ({
  areaCode: false,
  decorative: true,
  dialingCode: false,
  e164: false,
  extension: false,
  international: true,
  local: false,
  text: () => text,
});
