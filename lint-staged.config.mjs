/**
 * lint-staged.config.mjs
 * @ref https://www.npmjs.com/package/lint-staged
 */
export default {
  '*': ['biome check --write --no-errors-on-unmatched --files-ignore-unknown=true'],
};
