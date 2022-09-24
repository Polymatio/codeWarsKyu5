// Create a function that will take an array of strings and return the array of strings with a needless direction removed
// Assigning opposites to directions and its opposites
// Assigning results as an array
// Using forEach method to call one array of the element individually and shorten the loop
// The pop method will be used to remove the last element in the array
// The push method will be used to add one more element in the array
// Return the oppoiste direction in the array

function dirReduc(arr) {
    let opposites = {'NORTH' : 'SOUTH', 'EAST' : 'WEST', 'SOUTH' : 'NORTH', 'WEST' : 'EAST'};
    let result = [];

    arr.forEach(item => {
        if(result.length) {

            let previousItem = result.pop()
            if(previousItem !== opposites[item]) {
                result.push(previousItem)
                result.push(item)
            }
        }else {
            result.push(item);
        }
    })
    return result;
}