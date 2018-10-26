import IDecorator from "./decorator";

const decorator: IDecorator = {
  decorate(phoneNumber: string) {
    let localNumber;
    let internationalNumber;

    if (phoneNumber.substring(3, 4) == "4") {
      localNumber = `${phoneNumber.substring(2, 6)} ${phoneNumber.substring(6, 9)} ${phoneNumber.substring(9, 12)}`;
      internationalNumber = `+61 ${localNumber.substring(1)}`;
    } else {
      localNumber = `${phoneNumber.substring(2, 4)} ${phoneNumber.substring(4, 8)} ${phoneNumber.substring(8, 12)}`;
      internationalNumber = `+61 (${localNumber.substring(0, 2)})${localNumber.substring(2)}`;
    }

    return {
      local: localNumber,
      international: internationalNumber,
    };
  },
};

export default decorator;
