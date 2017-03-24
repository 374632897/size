const assert = require('assert');
const size = require('../');

const testCase = {
  306: '306 B',
  15915: '15.54 KB',
  1060: '1.04 KB',
  238: '238 B',
  110080: '107.50 KB',
  120849357: '115.25 MB',
  344336: '336.27 KB',
  11999773: '11.44 MB',
  1396640008: '1.30 GB',
};

Object.keys(testCase).forEach(item => {
  assert.equal(size(parseFloat(item, 10)), testCase[item]);
});
