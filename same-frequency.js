// add whatever parameters you deem necessary
function sameFrequency(num1, num2) {

    const str1 = num1.toString();
    const str2 = num2.toString();

    if (str1.length !== str2.length) return false;

    const str1Map = frequencyMap(str1);
    const str2Map = frequencyMap(str2);

    for (let key in str1Map) {
        if (str1Map[key] !== str2Map[key]) return false;
    }

    return true;
}

function frequencyMap(str) {
    const map = {};
    for (let char of str) {
        map[char] = (map[char] || 0) + 1;
    };
    return map;
}

module.exports = sameFrequency;