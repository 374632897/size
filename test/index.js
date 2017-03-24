const assert = require('assert');
const size = require('../');

const testCase = {
  306: '306B',
  15915: '16KB',
  1060: '1KB',
  238: '238B',
  110080: '108KB',
  120849357: '115MB',
  344336: '336KB',
  11999773: '11MB',
  1396640008: '1GB',
};

Object.keys(testCase).forEach(item => {
  assert.equal(size(parseFloat(item, 10)), testCase[item]);
});
