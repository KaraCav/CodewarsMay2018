// NUMBER 1: You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
function findEvenIndex(arr) {
    for (i = 1; i < arr.length; i++) {
        console.log('overall ', i);
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
            if (totalOne == totalTwo) {
                return i;
            }
        }
    }
    return -1;
}