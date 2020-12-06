import IPFS from "ipfs/src";
import { CLIENT_RENEG_LIMIT } from "tls";
import IPFSServer from "./ipfs";

IPFSServer.start().catch((err) => console.error(err));
