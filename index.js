module.exports = function (byte) {
  if (byte < 1024) return byte + ' B';
  return 'KB, MB, GB, TB'.split(', ').reduce(function (current, next) {
    if ( typeof current === 'string') return current;
    current /= 1024;
    return current <= 1024 ? current.toFixed(2) + ' ' + next : current;
  }, byte);
};
