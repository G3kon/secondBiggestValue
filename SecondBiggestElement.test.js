const findSecondBiggestElement = require('./SecondBiggestElement');

describe('findSecondBiggestElement', () => {
    it('should return second biggest value in array', () => {
        expect(findSecondBiggestElement([2,3])).toBe(2) 
        expect(findSecondBiggestElement([2,22,54,333])).toBe(54) 
        expect(findSecondBiggestElement([-12,22,-54,333])).toBe(22)
        expect(findSecondBiggestElement([1212,2,1254,-333])).toBe(1212)  
        expect(findSecondBiggestElement([1,0,54,33])).toBe(33) 
        expect(findSecondBiggestElement([1.4,3.5,345.4])).toBe(3.5)  
    });
    it('should return second biggest value in array with negatives numbers', () => {    
        expect(findSecondBiggestElement([-12,22,-54,333])).toBe(22)
        expect(findSecondBiggestElement([-12,-22,254,-333])).toBe(-12)  
        expect(findSecondBiggestElement([-134,0,-254,-333])).toBe(-134)   
        expect(findSecondBiggestElement([-1.4,-3.5,345.4])).toBe(-1.4) 
    });
    it('should return second biggest from array with all the same elements', () => {    
        expect(findSecondBiggestElement([23,23,23,])).toBe(23) 
        expect(findSecondBiggestElement([0,0,0,0])).toBe(0)
        expect(findSecondBiggestElement([-1,-1,-1,-1])).toBe(-1)
    });
    it('should return warning imformation if there is only one element in array', () => {    
        expect(findSecondBiggestElement([1])).toBe("There in no second element") 
    });
    it('should return warning imformation about given parameter', () => {    
        expect(findSecondBiggestElement('x')).toBe("Given parameter is not an array") 
        expect(findSecondBiggestElement(1)).toBe("Given parameter is not an array")
        expect(findSecondBiggestElement({testObj: 23})).toBe("Given parameter is not an array")  
    });
});