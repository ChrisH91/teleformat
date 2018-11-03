import DecoratedNumber from "../decorated-number";
import IDecorator from "../decorator";
import detectCountry from "../detect-country";
import {
  countryCodePart,
  internationalDecorativePart,
  numberPart,
} from "../number-part";

const decorator: IDecorator = {
  decorate(phoneNumber: string) {
    const country = detectCountry(phoneNumber);

    const decoratedNumber = new DecoratedNumber([
      internationalDecorativePart("+"),
    ]);

    if (country) {
      for (const digit of country.dialingCode) {
        decoratedNumber.parts.push(countryCodePart(digit));
      }

      decoratedNumber.parts.push(internationalDecorativePart(" "));

      if (phoneNumber.indexOf(country.dialingCode) === 0) {
        phoneNumber = phoneNumber.substring(country.dialingCode.length);
      }
    }

    for (const digit of phoneNumber) {
      decoratedNumber.parts.push(numberPart(digit));
    }

    return decoratedNumber;
  },
};

export default decorator;
