import IDecorator from "./decorator";

const decorator: IDecorator = {
  decorate(phoneNumber: string) {
    let localNumber;

    if (phoneNumber.length < 4) {
      localNumber = `${phoneNumber.substring(1)}`;
    } else if (phoneNumber.length < 7) {
      localNumber = `(${phoneNumber.substring(1, 4)}) ${phoneNumber.substring(4)}`;
    } else {
      localNumber = `(${phoneNumber.substring(1, 4)}) ${phoneNumber.substring(4, 7)}-${phoneNumber.substring(7)}`;
    }

    return {
      international: `+1 ${localNumber}`,
      local: localNumber,
    };
  },
};

export default decorator;
