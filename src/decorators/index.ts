import IDecorator from "../decorator";
import au from "./au";
import gb from "./gb";
import nanp from "./nanp";

const decorators: { [countryCode: string]: IDecorator } = {
  AU: au,
  GB: gb,
  NANP: nanp,
};

export default decorators;
