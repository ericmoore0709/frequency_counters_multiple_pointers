// add whatever parameters you deem necessary
function isSubsequence(str1, str2) {
    let ptr1 = 0;
    let ptr2 = 0;

    while (ptr1 < str1.length && ptr2 < str2.length) {
        if (str1[ptr1] === str2[ptr2]) ptr1++;
        ptr2++;
    }

    return (ptr1 === str1.length);
}

module.exports = isSubsequence;