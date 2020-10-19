export const get = (obj, path, defaultValue = void 0) => {
  const travel = (regexp) => String.prototype.split.call(path, regexp).filter(Boolean).reduce((res, key) => res !== null && res !== void 0 ? res[key] : res, obj);
  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);
  return result === void 0 || result === obj ? defaultValue : result;
};
