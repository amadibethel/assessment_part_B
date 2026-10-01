function diffObjects(oldObj, newObj) {
  const result = { added: {}, removed: {}, changed: {} };
  const oldKeys = new Set(Object.keys(oldObj));
  const newKeys = new Set(Object.keys(newObj));

  for (const key of newKeys) {
    if (!oldKeys.has(key)) {
      result.added[key] = newObj[key];
    } else if (oldObj[key] !== newObj[key]) {
      result.changed[key] = { from: oldObj[key], to: newObj[key] };
    }
  }
  for (const key of oldKeys) {
    if (!newKeys.has(key)) result.removed[key] = oldObj[key];
  }
  return result;
}