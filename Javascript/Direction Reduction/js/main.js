//Create a function that will take an array of strings and return the array of strings with a needless direction removed.

function dirReduc(arr) {
    let opposites = {'NORTH' : 'SOUTH', 'EAST' : 'WEST', 'SOUTH' : 'NORTH', 'WEST' : 'EAST'};
    let result = [];

    //Use a forEach to make it shorten the loop.
    arr.forEach(item => {
        if(result.length) {

            //Use a pop command to remove the last element in the array
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