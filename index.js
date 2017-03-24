module.exports = function (byte) {
  if (byte < 1024) return byte + ' B';
  return 'KB, MB, GB, TB'.split(', ').reduce((current, next) => {
    if ( typeof current === 'string') return current;
    const format = current / 1024;
    return format <= 1024 ? format.toFixed(2) + ' ' + next : format;
  }, byte);
};
