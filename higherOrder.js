// the foloowing program returns an array that contains only the
// words that are 6 letters long and no other words 

//An array of strings with 10 words, where at least 3 of the words have 6 letters.
const arr = ['orange', 'lemon', 'cherry', 'banana', 'apple', 'apricot', 'avocado', 'mango', 'papaya', 'grapes']

// a higher-order function takes 2 arguments: 
// an array of strings with 10 words
// a callback function that returns a boolean based on whether or not a word has 6 letters
let myFilterFunction = arr => fn => {
    const arrayAfterfilter = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i]) === true) {
            arrayAfterfilter.push(arr[i])
        }
    }
    return arrayAfterfilter
}

const sixLettersWords = myFilterFunction(arr)(item => item.length === 6); // calls myFilterFunction with 2 parametrs: array and callback function  
console.log(sixLettersWords)   //calls the inner function 

