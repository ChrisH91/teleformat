import DecoratedNumber from "../decorated-number";
import IDecorator from "../decorator";
import detectCountry from "../detect-country";
import {
  countryCodePart,
  extensionDecorativePart,
  extensionPart,
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

    let isExtension = false;

    for (const digit of phoneNumber) {
      if (digit === "x") {
        decoratedNumber.parts.push(extensionDecorativePart(" ext. "));
        isExtension = true;
      } else if (isExtension) {
        decoratedNumber.parts.push(extensionPart(digit));
      } else {
        decoratedNumber.parts.push(numberPart(digit));
      }
    }

    return decoratedNumber;
  },
};

export default decorator;
