/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
  ...require("@repo/eslint-config/prettier-base.js"),
};

module.exports = config;
