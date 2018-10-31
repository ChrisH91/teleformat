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

    if (phoneNumber.charAt(0) === "1") {
      phoneNumber = phoneNumber.substring(1);
    }

    for (let i = 0; i < phoneNumber.length; ++i) {
      const digit = phoneNumber[i];

      if (i === 0 && phoneNumber.length > 2) {
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
