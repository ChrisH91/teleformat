import IDecoratedNumber from "./decorated-number";
import { IExtensionConfig } from "./extension-config";

export default interface IDecorator {
  decorate(
    phoneNumber: string,
    extensionConfig?: IExtensionConfig
  ): IDecoratedNumber;
}
