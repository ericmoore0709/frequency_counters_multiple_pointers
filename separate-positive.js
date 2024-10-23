// add whatever parameters you deem necessary
function separatePositive(nonZeroIntegers) {
    let leftPtr = 0;
    let rightPtr = nonZeroIntegers.length - 1;

    while (leftPtr < rightPtr) {
        // Move leftPtr forward until it hits a negative
        while (leftPtr < rightPtr && nonZeroIntegers[leftPtr] > 0) {
            leftPtr++;
        }

        // Move rightPtr backward until it hits a positive
        while (leftPtr < rightPtr && nonZeroIntegers[rightPtr] < 0) {
            rightPtr--;
        }

        // Swap the values so long as the pointers haven't met
        if (leftPtr < rightPtr) {
            [nonZeroIntegers[leftPtr], nonZeroIntegers[rightPtr]] = [nonZeroIntegers[rightPtr], nonZeroIntegers[leftPtr]];
        }
    }

    return nonZeroIntegers;
}


module.exports = separatePositive;