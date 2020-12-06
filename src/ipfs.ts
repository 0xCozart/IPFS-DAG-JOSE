import IPFS from "ipfs-core";
import dagJose from "./dag-jose";
import { PORT, IPFS_ENABLE_API } from "./constants/constants";

export default class IpfsJoseServer {
  /*
   * Static method boots up IPFS node with Dag-Jose codec
   */
  static async start(): Promise<void> {
    const ipfs = await IPFS.create({
      ipld: { formats: [dagJose] },
    });
  }
}
