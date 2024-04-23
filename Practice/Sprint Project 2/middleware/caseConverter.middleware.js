const _ = require('lodash');

/**
 * Convert key of json in res to camelCase
 */
function toCamel(req, res, next) {
  const json = res.json;
  res.json = function (data) {
    function camelCaseKeys(obj) {
      if (Array.isArray(obj)) {
        return obj.map(camelCaseKeys);
      } else if (obj.constructor === Object) {
        const camelCasedObj = {};
        for (const key in obj) {
          const camelCasedKey = _.camelCase(key);
          camelCasedObj[camelCasedKey] = camelCaseKeys(obj[key]);
        }
        return camelCasedObj;
      } else {
        return obj;
      }
    }

    json.call(this, camelCaseKeys(data));
  };
  next();
}

module.exports = {
  toCamel
}