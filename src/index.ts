import countryCodeToDialingCode from "./data/country-code-to-dialing-code";
import dialingCodeToCountryCode from "./data/dialing-code-to-country-code";
import DecoratedNumber from "./decorated-number";
import decorators from "./decorators/index";
import detectCountry from "./detect-country";
import ICountry from "./country";

export { countryCodeToDialingCode, dialingCodeToCountryCode };

export default {
  decorate: (
    phoneNumber: string,
    countryCode?: string,
    extensionConfig = { decoratedDelimiter: " ext. ", delimiter: "x" }
  ): DecoratedNumber => {
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

    const extDelimiterRegex = new RegExp(extensionConfig.decoratedDelimiter, "g");
    const normalizedNumber = phoneNumber
      .replace(extDelimiterRegex, "x")
      .replace(new RegExp(`[^\\d${extensionConfig.delimiter},]`, "g"), "");

    if (!country || !decorators[country.countryCode]) {
      return decorators.unknown.decorate(normalizedNumber, extensionConfig);
    }

    return decorators[country.countryCode].decorate(normalizedNumber, extensionConfig);
  },
};
