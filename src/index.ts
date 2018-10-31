import ICountry from "./country";
import countryCodeToDialingCode from "./data/country-code-to-dialing-code";
import DecoratedNumber from "./decorated-number";
import decorators from "./decorators/index";
import detectCountry from "./detect-country";

export default {
  decorate: (phoneNumber: string, countryCode?: string): DecoratedNumber => {
    let country: ICountry | null;

    if (phoneNumber.charAt(0) !== "+" && countryCode && countryCodeToDialingCode[countryCode]) {
      country = {
        countryCode,
        dialingCode: countryCodeToDialingCode[countryCode],
      };
    } else {
      country = detectCountry(phoneNumber);
    }

    if (country === null || decorators[country.countryCode] === null) {
      return new DecoratedNumber([]);
    }

    const normalizedNumber = phoneNumber.replace(/\D/g, "");
    return decorators[country.countryCode].decorate(normalizedNumber);
  },
};
