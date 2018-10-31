import DecoratedNumber from "../decorated-number";
import IDecorator from "../decorator";
import {
  countryCodePart,
  decorativePart,
  internationalDecorativePart,
  numberPart,
} from "../number-part";

const decorator: IDecorator = {
  decorate(phoneNumber: string) {
    const decoratedNumber = new DecoratedNumber([
      internationalDecorativePart("+"),
      countryCodePart("1"),
      internationalDecorativePart(" "),
    ]);

    const stripCountryDigit = phoneNumber.substring(1);

    for (let i = 0; i < stripCountryDigit.length; ++i) {
      const digit = stripCountryDigit[i];

      if (i === 0 && stripCountryDigit.length > 2) {
        decoratedNumber.parts.push(decorativePart("("));
      }

      decoratedNumber.parts.push(numberPart(digit));

      if (i === 2) {
        decoratedNumber.parts.push(decorativePart(")"));
        decoratedNumber.parts.push(decorativePart(" "));
      }

      if (i === 5) {
        decoratedNumber.parts.push(decorativePart("-"));
      }
    }

    return decoratedNumber;
  },
};

export default decorator;
