import DecoratedNumber from "../decorated-number";
import IDecorator from "../decorator";
import {
  areaCodePart,
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

    // In NANP countries users will often type the local number with a precending 1, in normalizng
    // the data to be passed through to the decorator we always prepend the country code, this can
    // result in cases where the user has the country code '1' and the trunk no '1' at the start
    // of their input. We'll strip it away twice. No local NANP number can start with 1.
    if (phoneNumber.charAt(0) === "1") {
      phoneNumber = phoneNumber.substring(1);
    }

    if (phoneNumber.charAt(0) === "1") {
      phoneNumber = phoneNumber.substring(1);
    }

    for (let i = 0; i < phoneNumber.length; ++i) {
      const digit = phoneNumber[i];

      if (i === 0 && phoneNumber.length > 2) {
        decoratedNumber.parts.push(decorativePart("("));
      }

      if (i >= 0 && i <= 2) {
        decoratedNumber.parts.push(areaCodePart(digit));
      } else {
        decoratedNumber.parts.push(numberPart(digit));
      }

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
