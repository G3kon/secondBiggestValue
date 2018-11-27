const findSecondBiggestElement = (array) => {
    let biggestNumber = -2147483648;
    let secondBiggestNumber = -2147483648;
    
    if(!(Array.isArray(array))){
        return "Given parameter is not an array"
    }
    else if(array.length === 1){
        return "There in no second element";
    }

    for(currentElement of array)
    {
        if(currentElement >= biggestNumber){
            secondBiggestNumber = biggestNumber;
            biggestNumber = currentElement
        }
        if(currentElement < biggestNumber && currentElement > secondBiggestNumber){
            secondBiggestNumber = currentElement;
        }
    }
    return secondBiggestNumber;
}
module.exports = findSecondBiggestElement;