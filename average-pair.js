// add whatever parameters you deem necessary
function averagePair(intArr, targetAvg) {
    if (!intArr.length) return false;

    let ptr1 = 0;
    let ptr2 = intArr.length - 1;

    while (ptr1 < ptr2) {
        const trueAvg = (intArr[ptr1] + intArr[ptr2]) / 2;
        if (trueAvg === targetAvg) return true;
        if (trueAvg < targetAvg) ptr1++;
        else ptr2--;
    }

    return false;
}

module.exports = averagePair;