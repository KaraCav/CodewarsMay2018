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
// NUMBER 3: Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself. Given a number, return 'Disarium' or 'Not'.
function disariumNumber(n) {
    var numStr = n.toString();
    var nNum = 0;
    for (var i = 1; i < numStr.length + 1; i++) {
        nNum = nNum + (Math.pow(numStr[i - 1], i));
        console.log(nNum);
    }
    if (nNum == n) {
        return "Disarium !!";
    }
    else {
        return "Not !!";
    }
}
//OR can do:
function disariumNumber(n) {
    return Number(String(n).split``
        .map((x, i) => Math
            .pow(x, i + 1))
        .reduce((a, b) => a + b, 0)) === n
        ? "Disarium !!"
        : "Not !!"
}

// NUMBER 4: You get an array of numbers, return the sum of all of the positives ones.
function positiveSum(arr) {
    var mySum = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            mySum = mySum + arr[i];
        }
    }
    return mySum;
}

//NUMBER 5: Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once ( ignore duplicates).

function minValue(values) {
    let sortedNum = values.sort();
    let numArr = [];
    for (i = 0; i < values.length; i++) {
        if (numArr.indexOf(sortedNum[i]) < 0) {
            numArr.push(sortedNum[i]);
        }
    }
    return Number(numArr.join(''));
}

// NUMBER 6: Several people are standing in a row divided into two teams. The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on. Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.
function rowWeights(array) {
    array1 = [0];
    array2 = [0];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            array1.push(array[i]);
        }
        else {
            array2.push(array[i]);
        }
    }
    let finalArr = [];
    let finalNum1 = array1.reduce(function (total, num) {
        return total + num;
    });
    let finalNum2 = array2.reduce(function (total, num) {
        return total + num;
    });
    finalArr.push(finalNum1);
    finalArr.push(finalNum2);
    return finalArr;
}
//OR can do:
function rowWeights(array) {
    let t1 = array.filter((x, i) => i % 2 == 0).reduce((a, item) => a + item, 0);
    let t2 = array.filter((x, i) => i % 2 != 0).reduce((a, item) => a + item, 0);
    return [t1, t2]
}

// NUMBER 7: A Tidy number is a number whose digits are in non-decreasing order.
function tidyNumber(n) {
    nArr = n.toString();
    console.log(Array.from(nArr));
    for (let i = 0; i < nArr.length; i++) {
        console.log(typeof (Number(nArr[i])));
        if (Number(nArr[i]) > Number(nArr[i + 1])) {
            return false;
        }
    }
    return true;
}
//OR can do:
function tidyNumber(n) {
    return [...n += ""].sort().join`` == n
}

// NUMBER 8: Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.

function minimumSteps(numbers, value) {
    let equalValue = 0;
    let iterationNum = 0
    let newNums = numbers.sort(function (a, b) { return a - b });
    for (let i = 0; i <= newNums.length; i++) {
        if (equalValue < value) {
            equalValue = equalValue + newNums[i];
            iterationNum = iterationNum + 1;
        }
        else { return iterationNum - 1 }
    }
}