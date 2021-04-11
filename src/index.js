import isObject from 'isobject';

export default (obj, acc = []) => {
  const fn = (o, s) => {
    if (Array.isArray(o) || isObject(o)) {
      return Object.keys(o).forEach((k) => {
        const path = s ? Array.isArray(o) ? `${s}[${k}]` : `${s}.${k}` : k;

        const isLeaf = fn(o[k], path) === false;
        if (isLeaf) { acc.push(path); }
      });
    }
    return false;
  };

  fn(obj, undefined);
  return acc;
};
