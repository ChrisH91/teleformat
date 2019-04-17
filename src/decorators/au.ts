import DecoratedNumber from "../decorated-number";
import IDecorator from "../decorator";
import {
  countryCodePart,
  decorativePart,
  extensionDecorativePart,
  extensionPart,
  internationalDecorativePart,
  localDecorativePart,
  numberPart,
} from "../number-part";

const mobileAreaCodes = [
  "4",
  "5",
];

const decorator: IDecorator = {
  decorate(phoneNumber: string) {
    const decoratedNumber = new DecoratedNumber([
      internationalDecorativePart("+"),
      countryCodePart("6"),
      countryCodePart("1"),
      internationalDecorativePart(" "),
    ]);

    if (phoneNumber.indexOf("61") === 0) {
      phoneNumber = phoneNumber.substring(2);
    }

    if (phoneNumber.length === 0) {
      return decoratedNumber;
    }

    if (phoneNumber.charAt(0) === "0") {
      if (phoneNumber.length === 1) {
        decoratedNumber.parts.push(decorativePart("0"));
        return decoratedNumber;
      }

      phoneNumber = phoneNumber.substring(1);
    }

    const isMobile = mobileAreaCodes.indexOf(phoneNumber.charAt(0)) !== -1;
    let isExtension = false;

    for (let i = 0; i < phoneNumber.length; ++i) {
      const digit = phoneNumber[i];

      if (i === 0) {
        if (isMobile) {
          decoratedNumber.parts.push(localDecorativePart(0));
        } else {
          decoratedNumber.parts.push(
            decorativePart("("),
            decorativePart("0"),
            numberPart(digit),
            decorativePart(")"),
            decorativePart(" "),
          );

          continue;
        }
      }

      if (digit === "x") {
        decoratedNumber.parts.push(extensionDecorativePart(" ext. "));
        isExtension = true;
        continue;
      } else if (isExtension) {
        decoratedNumber.parts.push(extensionPart(digit));
        continue;
      }

      decoratedNumber.parts.push(numberPart(digit));

      if (isMobile && (i === 2 || i === 5) || !isMobile && (i === 4)) {
        decoratedNumber.parts.push(decorativePart(" "));
      }
    }

    return decoratedNumber;
  },
};

export default decorator;
