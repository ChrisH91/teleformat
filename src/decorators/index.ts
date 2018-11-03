import IDecorator from "../decorator";
import au from "./au";
import gb from "./gb";
import nanp from "./nanp";
import unknown from "./unknown";

const decorators: { [countryCode: string]: IDecorator } = {
  AU: au,
  GB: gb,
  NANP: nanp,
  unknown,
};

export default decorators;
