// NUMBER 1: You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
function findEvenIndex(arr) {
    for (i = 1; i < arr.length; i++) {
        totalOne = 0;
        totalTwo = 0;
        var arr1 = [];
        var arr2 = [];
        for (j = 0; j < i; j++) {
            arr1.push(arr[j]);
            totalOne = totalOne + arr[j];
        }
        for (k = i + 1; k < arr.length; k++) {
            arr2.push(arr[k]);
            totalTwo = totalTwo + arr[k];
        }
        if (totalOne == totalTwo) {
            return i;
        }
    }
    return -1;
}
// OR can do:
function findEvenIndex(arr) {
    for (var i = 1; i < arr.length - 1; i++) {
        if (arr.slice(0, i).reduce((a, b) => a + b) === arr.slice(i + 1).reduce((a, b) => a + b)) {
            return i;
        }
    }
    return -1;
}

