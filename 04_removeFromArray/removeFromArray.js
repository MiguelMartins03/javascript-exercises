const removeFromArray = function(array, ...itemsToRemove) {
    for(let i = 0; i < itemsToRemove.length; i++){
        let indexToRemove = array.indexOf(itemsToRemove[i]);
        if(indexToRemove !== -1){
            array.splice(indexToRemove, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
