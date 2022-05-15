import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
export const { COINCAP_KEY, CRYPTO_KEY } = publicRuntimeConfig;
