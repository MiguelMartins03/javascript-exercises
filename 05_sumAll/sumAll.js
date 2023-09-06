const sumAll = function(initialNum, finalNum) {
    let result = 0;
    if((typeof initialNum === "number" && initialNum >= 0) && (typeof finalNum === "number" && finalNum >= 0)){
        let i, max;
        if(initialNum < finalNum){
            i = initialNum;
            max = finalNum;
        }else{
            i = finalNum;
            max = initialNum;
        }
        for(;i <= max; i++){
            result += i;
        }
    }else{
        result = "ERROR";
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
