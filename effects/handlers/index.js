const Redis = require('ioredis');

function redisHandler(redis, { operation, args }) {
  return redis[operation].apply(redis, args);
}

module.exports = host => {
  const redis = new Redis({ host, lazyConnect: true });
  return {
    redis: action => redisHandler(redis, action)
  };
};
