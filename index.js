module.exports = function (byte) {
  if (byte < 1024) return byte + 'B';
  return 'KB, MB, GB, TB'.split(', ').reduce((pre, next) => {
    if ( typeof pre === 'string') return pre;
    const format = pre / 1024;
    return format <= 1024 ? Math.round(format) + '' +  next : format;
  }, byte);
};
