// Create a function to generate a hashtag generator
// Assigning newHastTag as a string
// using split method will the string into bits of strings
// The filter method to filter down the string to pass a test by the provided condition in the function
// Assigning hashTag to #
// Conditionals will be used to allow filtering for the hashtag
// Will make a condition where the index is 0 on the string without a hashtag to be false
// Assigning results to result and combine it with newHashTag
// Using the map method to create a new element in the array by using word as part of the method
// Assigning capitalWord to word using the charAt method, toUpperCase method, and slice method
// The charAt method will return a new string
// The toUppercase method allows each beginning of the string to be capitalized
// The slice method will be used to start the string at an index
// Created another conditional if the result is longer then 140 character to return false otherwise return true

function generateHashTag(str) {
    let newHashTag = str.split(' ').filter(char => char !== "");
    let hashTag = "#";

    if(newHashTag.length === 0) {
        return false;
    }

    result = result + newHashTag.map(word => {
        let capitalWord = word.charAt(0) .toUpperCase() + word.slice(1);
        return capitalWord;
    }) .join('');

    if(hashTag.length > 140) {
        return false;
    }else {
        return result;
    }
}