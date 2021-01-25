
function solution (input) {
    // logic here
    let numArray = parseInput(input);
    let list = permutations(numArray);

     return list;
  }

  function parseInput (input) {
    // convert all string charcters to number array elements
    let numArr = [];
    for(let char of input.split("")) {
        numArr.push(parseInt(char));
    }
    return numArr;
  };

  function fitNewNumber(currArr, pos, num) {
    let newArr = [...currArr];
    newArr.splice(pos, 0, num);
    return newArr;
}

function arrayToNumber(list) {
    let num = 0;
    for(let i of list) {
        num = (num * 10) + i;
    }
    return num;
}

function permutations(input) {
    //edge cases for empty and single input
    let lastNum = input[input.length - 1]
    let list = [ [lastNum] ];
    for(let i = 0; i < input.length - 1; i++) {
        let currNum = input[i];
        let newList = [];

        for(let listItem of list) {
            for(let j = 0; j <= listItem.length; j++) {
                newElement = fitNewNumber(listItem, j, currNum);
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

  // some example inputs
   console.log(solution('326')); // expected ouput 632,623,362,326,263,236
//   console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236