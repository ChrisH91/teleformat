
import DecoratedNumber from "../decorated-number";
import IDecorator from "../decorator";
import {
  countryCodePart,
  decorativePart,
  extensionDecorativePart,
  extensionPart,
  internationalDecorativePart,
  numberPart,
} from "../number-part";

const threeDigitAreaCodesStartingDigits = [
  "3",
  "8",
  "9",
];

const fiveDigitAreaCodes = [
  "13873",
  "15242",
  "15394",
  "15395",
  "15396",
  "16973",
  "16974",
  "16977",
  "16977",
  "17683",
  "17684",
  "17687",
  "19467",
];

const decorator: IDecorator = {
  decorate(
    phoneNumber: string,
    extensionConfig = { decoratedDelimiter: " ext. ", delimiter: "x" }
  ) {
    const decoratedNumber = new DecoratedNumber([
      internationalDecorativePart("+"),
      countryCodePart("4"),
      countryCodePart("4"),
      internationalDecorativePart(" "),
    ]);

    if (phoneNumber.indexOf("44") === 0) {
      phoneNumber = phoneNumber.substring(2);
    }

    if (phoneNumber.length === 0) {
      return decoratedNumber;
    }

    decoratedNumber.parts.push(
      internationalDecorativePart("("),
      decorativePart("0"),
      internationalDecorativePart(")"),
      internationalDecorativePart(" "),
    );

    if (phoneNumber.charAt(0) === "0") {
      phoneNumber = phoneNumber.substring(1);
    }

    let areaCodeLength = 4;
    let localCodeLength: number | null = null;

    const firstDigit = phoneNumber.charAt(0);
    const thirdDigit = phoneNumber.charAt(2);

    const firstTwoDigits = phoneNumber.substring(0, 1);
    const firstFiveDigits = phoneNumber.substring(0, 5);

    if (firstDigit === "2") {
      areaCodeLength = 2;
      localCodeLength = 4;
    } else if (
      threeDigitAreaCodesStartingDigits.indexOf(firstDigit) !== -1 ||
      firstTwoDigits === "11" ||
      firstDigit === "1" && thirdDigit === "1"
    ) {
      areaCodeLength = 3;
      localCodeLength = 3;
    } else if (fiveDigitAreaCodes.indexOf(firstFiveDigits) !== -1) {
      areaCodeLength = 5;
    }

    let isExtension = false;

    for (let i = 0; i < phoneNumber.length; ++i) {
      const digit = phoneNumber[i];

      if (digit === extensionConfig.delimiter) {
        decoratedNumber.parts.push(extensionDecorativePart(extensionConfig));
        isExtension = true;
      } else if (isExtension) {
        decoratedNumber.parts.push(extensionPart(digit));
      } else {
        decoratedNumber.parts.push(numberPart(digit));
      }

      if (
        i === areaCodeLength - 1 ||
        localCodeLength && i === areaCodeLength + localCodeLength - 1
      ) {
        decoratedNumber.parts.push(decorativePart(" "));
      }
    }

    return decoratedNumber;
  },
};

export default decorator;
