//Create a function to generate a hashtag generator.

function generateHashTag(str) {
    let newHashTag = str.split(' ').filter(char => char !== "");
    let hashTag = "#";

    //Conditional to exclude any spacings using the split command and filter command.
    if(newHashTag.length === 0) {
        return false;
    }

    //Created and and let hastTag be # while using toUpperCase to start with capital letters.
    result = result + newHashTag.map(word => {
        let capitalWord = word.charAt(0) .toUpperCase() + word.slice(1);
        return capitalWord;
    }) .join('');

    //Conditional for characters/symbols over 140.
    if(hashTag.length > 140) {
        return false;
    }else {
        return result;
    }
}