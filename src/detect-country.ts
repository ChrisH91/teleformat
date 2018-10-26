import ICountry from "./country";
import countryCodeToDialingCode from "./country-code-to-dialing-code.json";
import dialingCodeToCountryCode from "./dialing-code-to-country-code.json";

export const getPotentialCountryCodeDigits = (phoneNumber: string): string => {
  return phoneNumber.charAt(0) === "+" ? phoneNumber.slice(1, 7) : phoneNumber.slice(0, 6);
};

export const findCountryCode = (phoneNumber: string): string | null => {
  if (dialingCodeToCountryCode[phoneNumber.charAt(0)]) {
    return dialingCodeToCountryCode[phoneNumber.charAt(0)];
  }

  if (dialingCodeToCountryCode[phoneNumber.substring(0, 2)]) {
    return dialingCodeToCountryCode[phoneNumber.substring(0, 2)];
  }

  if (dialingCodeToCountryCode[phoneNumber.substring(0, 3)]) {
    return dialingCodeToCountryCode[phoneNumber.substring(0, 3)];
  }

  return null;
};

export default (phoneNumber: string): ICountry | null => {
  const potentialCountryCodeDigits = getPotentialCountryCodeDigits(phoneNumber);
  const countryCode = findCountryCode(potentialCountryCodeDigits);

  if (countryCode === null) {
    return null;
  }

  return {
    countryCode,
    dialingCode: countryCodeToDialingCode[countryCode],
  };
};
