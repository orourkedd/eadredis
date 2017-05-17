function redisSet({ key, value }) {
  return {
    type: 'redis',
    operation: 'set',
    args: [key, value]
  };
}

function redisSAdd({ key, value }) {
  return {
    type: 'redis',
    operation: 'sAdd',
    args: [key, value]
  };
}

function redisSGet({ key }) {
  return {
    type: 'redis',
    operation: 'sGet',
    args: [key]
  };
}

function redisGet({ key }) {
  return {
    type: 'redis',
    operation: 'get',
    args: [key]
  };
}

function redisDel({ key }) {
  return {
    type: 'redis',
    operation: 'del',
    args: [key]
  };
}

module.exports = {
  redisGet,
  redisSet,
  redisSGet,
  redisSAdd,
  redisDel
};
