require("dotenv").config();

module.exports = {
  publicRuntimeConfig: {
    COINCAP_KEY: process.env.COINCAP_KEY,
    CRYPTO_KEY: process.env.CRYPTO_KEY
  }
};
