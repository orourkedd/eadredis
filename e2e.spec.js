const { deepEqual } = require('assert');
const setup = require('./index');

const { redisSet, redisGet } = setup('localhost');

test('redisSet() should write to redis', () => {
  return redisSet({ key: 'foo', value: 'bar' }).then(() => {
    return redisGet({ key: 'foo' }).then($result => {
      deepEqual($result.payload, 'bar');
    });
  });
});
