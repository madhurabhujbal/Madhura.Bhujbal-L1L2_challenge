
function solution (input) {
    let numArray = parseInput(input);

    // logic here
     return numArray;
  }

  function parseInput (input) {
    // convert all string charcters to number array elements
    let numArr = [];
    for(let char of input.split("")) {
        numArr.push(parseInt(char));
    }
    return numArr;
  };

  // some example inputs
   console.log(solution('326')); // expected ouput 632,623,362,326,263,236
//   console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236