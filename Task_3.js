function deepFreeze(obj) {
  if (obj === null || typeof obj !== 'object') return obj;

  Object.values(obj).forEach(value => {
    if (typeof value === 'object' && value !== null && !Object.isFrozen(value)) {
      deepFreeze(value);
    }
  });

  return Object.freeze(obj);
}