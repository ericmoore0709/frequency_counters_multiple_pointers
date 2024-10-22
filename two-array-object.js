// add whatever parameters you deem necessary
function twoArrayObject(keys, values) {

    const map = {};

    for (let i = 0; i < keys.length; i++) {
        map[keys[i]] = values[i] || null;
    }

    return map;

}

module.exports = twoArrayObject;