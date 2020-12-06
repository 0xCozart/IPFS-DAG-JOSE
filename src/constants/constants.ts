import { resolve } from "path";
import { config } from "dotenv";

const ENV_PATH =
  process.env.NODE_ENV === "production"
    ? "../../.env.production"
    : "../../.env.development";

config({ path: resolve(__dirname, ENV_PATH) });

export const { PORT, IPFS_ENABLE_API } = <{ [key: string]: string }>process.env;
