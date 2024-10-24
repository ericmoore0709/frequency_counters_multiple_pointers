// add whatever parameters you deem necessary
function countPairs(arr, target) {
    if (!arr.length) return 0;

    let seen = new Set();
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        if (seen.has(target - arr[i])) count++;
        seen.add(arr[i]);
    }

    return count;
}

module.exports = countPairs;