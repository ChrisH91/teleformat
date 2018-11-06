import ICountry from "./country";
import countryCodeToDialingCode from "./data/country-code-to-dialing-code";
import dialingCodeToCountryCode from "./data/dialing-code-to-country-code";
import DecoratedNumber from "./decorated-number";
import decorators from "./decorators/index";
import detectCountry from "./detect-country";

export { countryCodeToDialingCode, dialingCodeToCountryCode };

export default {
  decorate: (phoneNumber: string, countryCode?: string): DecoratedNumber => {
    let country: ICountry | null;

    if (phoneNumber.charAt(0) !== "+" && countryCode && countryCodeToDialingCode[countryCode]) {
      const dialingCode = countryCodeToDialingCode[countryCode];

      phoneNumber = `${dialingCode}${phoneNumber}`;
      country = {
        countryCode,
        dialingCode,
      };

    } else {
      country = detectCountry(phoneNumber);
    }

    const normalizedNumber = phoneNumber.replace(/\D/g, "");

    if (!country || !decorators[country.countryCode]) {
      return decorators.unknown.decorate(normalizedNumber);
    }

    return decorators[country.countryCode].decorate(normalizedNumber);
  },
};
