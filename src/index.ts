import decorators from "./decorators/index";
import detectCountry from "./detect-country";

export default {
  decorate: (phoneNumber: string): string => {
    const country = detectCountry(phoneNumber);

    if (country === null) {
      return phoneNumber;
    }

    if (decorators[country.countryCode] === null) {
      return phoneNumber;
    }

    const normalizedNumber = phoneNumber.replace(/\D/g, "");
    return decorators[country.countryCode].decorate(normalizedNumber);
  },
};
