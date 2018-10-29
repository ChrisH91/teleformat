import IDecoratedNumber from "./decorators/decorated-number";
import decorators from "./decorators/index";
import detectCountry from "./detect-country";

export default {
  decorate: (phoneNumber: string): IDecoratedNumber => {
    const country = detectCountry(phoneNumber);

    if (country === null || decorators[country.countryCode] === null) {
      return {
        international: phoneNumber,
        local: phoneNumber,
      };
    }

    const normalizedNumber = phoneNumber.replace(/\D/g, "");
    return decorators[country.countryCode].decorate(normalizedNumber);
  },
};
