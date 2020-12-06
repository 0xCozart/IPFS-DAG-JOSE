import dagJose from "dag-jose";
// @ts-ignore
import multiformats from "multiformats/basics";
// @ts-ignore
import legacy from "multiformats/legacy";

multiformats.multicodec.add(dagJose);
export default legacy(multiformats, dagJose.name);
