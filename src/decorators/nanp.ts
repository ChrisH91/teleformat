import IDecorator from "./decorator";

const nanp: IDecorator = {
  decorate(phoneNumber: string) {
    if (phoneNumber.length < 4) {
      return `+1 ${phoneNumber.substring(1)}`;
    }

    if (phoneNumber.length < 7) {
      return `+1 (${phoneNumber.substring(1, 4)}) ${phoneNumber.substring(4)}`;
    }

    return `+1 (${phoneNumber.substring(1, 4)}) ${phoneNumber.substring(4, 7)}-${phoneNumber.substring(7)}`;
  },
};

export default nanp;
