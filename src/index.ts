import DecoratedNumber from "./decorated-number";
import decorators from "./decorators/index";
import detectCountry from "./detect-country";

export default {
  decorate: (phoneNumber: string): DecoratedNumber => {
    const country = detectCountry(phoneNumber);

    if (country === null || decorators[country.countryCode] === null) {
      return new DecoratedNumber([]);
    }

    const normalizedNumber = phoneNumber.replace(/\D/g, "");
    return decorators[country.countryCode].decorate(normalizedNumber);
  },
};
