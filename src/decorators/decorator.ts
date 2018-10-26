import DecoratedNumber from "./decorated-number";

export default interface IDecorator {
  decorate(phoneNumber: string): DecoratedNumber;
}
