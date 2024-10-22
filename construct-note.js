// add whatever parameters you deem necessary
function constructNote(message, letters) {
    if (!letters) return false;
    if (!message) return true;

    const messageMap = frequencyMap(message);
    const lettersMap = frequencyMap(letters);

    for (let letter in messageMap) {
        if (!lettersMap[letter]) return false;
        if (lettersMap[letter] < messageMap[letter]) return false;
    }

    return true;
}

function frequencyMap(str) {
    const map = {};
    for (let char of str) {
        map[char] = map[char] + 1 || 1;
    };
    return map;
}

module.exports = constructNote;