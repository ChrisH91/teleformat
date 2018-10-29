import IDecorator from "./decorator";

const decorator: IDecorator = {
  decorate(phoneNumber: string) {
    let localNumber;
    let internationalNumber;

    const isMobile = phoneNumber.substring(3, 4) === "4";

    if (phoneNumber.length < 4) {
      localNumber = `${phoneNumber.substring(2)}`;
      internationalNumber = `+61 ${phoneNumber.substring(2)}`;
    } else if (isMobile) {
      if (phoneNumber.length < 7) {
        const suffix = phoneNumber.substring(4);
        localNumber = `04${suffix}`;
        internationalNumber = `+61 4${suffix}`;
      } else if (phoneNumber.length < 9) {
        const suffix = `${phoneNumber.substring(4, 6)} ${phoneNumber.substring(6, 9)}`;
        localNumber = `04${suffix}`;
        internationalNumber = `+61 4${suffix}`;
      } else {
        const suffix = `${phoneNumber.substring(4, 6)} ` +
          `${phoneNumber.substring(6, 9)} ` +
          `${phoneNumber.substring(9)}`;
        localNumber = `04${suffix}`;
        internationalNumber = `+61 4${suffix}`;
      }
    } else {
      if (phoneNumber.length < 5) {
        localNumber = `0${phoneNumber.substring(3)} `;
        internationalNumber = `+61 (0${phoneNumber.substring(3)}) `;
      } else if (phoneNumber.length < 8) {
        localNumber = `0${phoneNumber.substring(3, 4)} ${phoneNumber.substring(4)}`;
        internationalNumber = `+61 (0${phoneNumber.substring(3, 4)}) ${phoneNumber.substring(4)}`;
      } else {
        localNumber = `0${phoneNumber.substring(3, 4)} ` +
          `${phoneNumber.substring(4, 8)} ` +
          `${phoneNumber.substring(8)}`;
        internationalNumber = `+61 (0${phoneNumber.substring(3, 4)}) ` +
          `${phoneNumber.substring(4, 8)} ` +
          `${phoneNumber.substring(8)}`;
      }
    }

    return {
      international: internationalNumber,
      local: localNumber,
    };
  },
};

export default decorator;
