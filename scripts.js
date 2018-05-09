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
// NUMBER 2: Two kangaroos are jumping on a line. They start out at different points on the line, and jump in the same direction at different speeds. Determine whether or not they'll ever land in the same spot at the same time. Your function is given four arguments: the first kangaroo's starting point, the first kangaroo's speed, the second kangaroo's starting point, and the second kangaroo's speed.Return true if the above conditions are met, else false.
function kangaroo(kanga1, rate1, kanga2, rate2) {
    if (kanga1 < kanga2 && rate1 < rate2) {
        return false;
    }
    if (kanga2 < kanga1 && rate2 < rate1) {
        return false;
    }
    if (kanga1 >= kanga2 && rate2 >= rate1) {
        while (kanga2 < kanga1) {
            kanga1 = kanga1 + rate1;
            kanga2 = kanga2 + rate2;
            if (kanga1 == kanga2) {
                return true;
            }
        }
    }
    if (kanga2 >= kanga1 && rate1 >= rate2) {
        while (kanga1 < kanga2) {
            kanga1 = kanga1 + rate1;
            kanga2 = kanga2 + rate2;
            if (kanga1 == kanga2) {
                return true;
            }
        }
    }
    return false;
}