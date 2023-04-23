export const uuid = () =>
  (crypto.getRandomValues(new Uint32Array(1))[0] / Math.pow(2, 32))
    .toString(36)
    .slice(2);
