const { pipe, toPairs, fromPairs, map } = require('ramda');
const actions = require('../actions');

function actionsToFunctions([name, action]) {
  const fn = function*() {
    return yield action.apply(null, arguments);
  };

  return [name, fn];
}

module.exports = pipe(toPairs, map(actionsToFunctions), fromPairs)(actions);
