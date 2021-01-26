function parseInput (input) {
    // convert all string charcters to number array elements
    let numArr = [];
    for(let char of input.split("")) {
        let num = parseInt(char);
        if(!isNaN(num) && isFinite(num)) {
            numArr.push(num);
        }
    }
    return numArr;
  };

  function insertDigitAt(currArr, pos, num) {
    let newArr = [...currArr];
    newArr.splice(pos, 0, num);
    return newArr;
}

function arrayToNumber(digits) {
    let num = 0;
    for(let i of digits) {
        num = (num * 10) + i;
    }
    return num;
}

function calcPermutations(input) {
    if(input.length == 1)
        return input;

    let list = [ [input[0]] ];
    for(let i = 1; i < input.length; i++) {
        let currNum = input[i];
        let newList = [];

        for(let listItem of list) {
            for(let j = 0; j < listItem.length + 1; j++) {
                newElement = insertDigitAt(listItem, j, currNum);
                newList.push(newElement);
            }
        }
        list = newList;
    }
    //convert each item in the list to its n digit number equivalent
    let result = [];
    for(let item of list) {
        result.push(arrayToNumber(item));
    }

    let sortedArray =  result.sort((a, b) => b - a);    //sort in elements descending order
    return sortedArray.join(',');                       // return comma separated list of elements
}

function solution(input) {
    let numArray = parseInput(input);   // convert string to array '326' => [3, 2, 6]
    if(numArray.length == 0) {
        return `No valid number found in the given input => '${input}'`;
    }
    let permutations = calcPermutations(numArray);

     return permutations;
}

exports.solution = solution;