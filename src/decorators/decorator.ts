import IDecoratedNumber from "./decorated-number";

export default interface IDecorator {
  decorate(phoneNumber: string): IDecoratedNumber;
}
