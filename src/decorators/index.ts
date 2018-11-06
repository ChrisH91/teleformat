import IDecorator from "../decorator";
import au from "./au";
import gb from "./gb";
import nanp from "./nanp";
import unknown from "./unknown";

const decorators: { [countryCode: string]: IDecorator } = {
  AG: nanp,
  AI: nanp,
  AS: nanp,
  AU: au,
  BB: nanp,
  BM: nanp,
  BS: nanp,
  CA: nanp,
  DM: nanp,
  DO: nanp,
  GB: gb,
  GD: nanp,
  GU: nanp,
  JM: nanp,
  KN: nanp,
  KY: nanp,
  LC: nanp,
  MS: nanp,
  NANP: nanp,
  PR: nanp,
  SX: nanp,
  TC: nanp,
  TT: nanp,
  US: nanp,
  VC: nanp,
  VG: nanp,
  VI: nanp,
  unknown,
};

export default decorators;
