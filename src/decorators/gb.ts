import IDecorator from "./decorator";

const sixDigitAreaCodes = [
  "013873",
  "015242",
  "015394",
  "015395",
  "015396",
  "016973",
  "016974",
  "016977",
  "016977",
  "017683",
  "017684",
  "017687",
  "019467",
];

const decorator: IDecorator = {
  decorate(phoneNumber: string) {
    let localNumber;

    if (phoneNumber.substring(2, 4) === "02") {
      localNumber = `${phoneNumber.substring(3, 5)}` +
        `${phoneNumber.length > 3 ? ` ${phoneNumber.substring(5, 9)}` : ""}` +
        `${phoneNumber.length > 5 ? ` ${phoneNumber.substring(9)}` : ""}`;
    } else if (
      phoneNumber.substring(2, 4) === "03" ||
      phoneNumber.substring(2, 4) === "08" ||
      phoneNumber.substring(2, 4) === "09" ||
      phoneNumber.substring(2, 4) === "08" ||
      phoneNumber.substring(2, 5) === "011" ||
      (phoneNumber.substring(2, 4) === "01" && phoneNumber.charAt(5) === "1")
    ) {
      localNumber =
        `${phoneNumber.length > 3 ? `${phoneNumber.substring(3, 6)}` : ""}` +
        `${phoneNumber.length > 5 ? ` ${phoneNumber.substring(6, 9)}` : ""}` +
        `${phoneNumber.length > 9 ? ` ${phoneNumber.substring(9)}` : ""}`;
    } else if (sixDigitAreaCodes.indexOf(phoneNumber.substring(2, 8)) !== -1) {
      localNumber = `${phoneNumber.substring(3, 8)} ${phoneNumber.substring(8)}`;
    } else {
      localNumber =
        `${phoneNumber.length > 3 ? `${phoneNumber.substring(3, 7)}` : ""}` +
        `${phoneNumber.length > 6 ? ` ${phoneNumber.substring(7)}` : ""}`;
    }

    return {
      international: `+44 (0) ${localNumber}`,
      local: `0${localNumber}`,
    };
  },
};

export default decorator;
