import decorators from "./decorators/index";
import detectCountry from "./detect-country";
import DecoratedNumber from "./decorators/decorated-number";

export default {
  decorate: (phoneNumber: string): DecoratedNumber => {
    const country = detectCountry(phoneNumber);

    if (country === null || decorators[country.countryCode] === null) {
      return {
        local: phoneNumber,
        international: phoneNumber
      };
    }

    const normalizedNumber = phoneNumber.replace(/\D/g, "");
    return decorators[country.countryCode].decorate(normalizedNumber);
  },
};
