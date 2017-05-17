const { run, buildFunctions } = require('effects-as-data');
const buildHandlers = require('./handlers');
const functions = require('./functions');

module.exports = host => {
  const handlers = buildHandlers(host);
  return buildFunctions(handlers, functions);
};
