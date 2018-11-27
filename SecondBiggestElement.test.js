const findSecondBiggestElement = require('./SecondBiggestElement');

describe('findSecondBiggestElement', () => {
    it('should return second biggest value in array', () => {
        expect(findSecondBiggestElement([12,22,54,333])).toBe(54) 
        expect(findSecondBiggestElement([23,23,23,])).toBe(23) 
        expect(findSecondBiggestElement([-12,22,-54,333])).toBe(22)
        expect(findSecondBiggestElement([-12,-22,254,-333])).toBe(-12)  
        expect(findSecondBiggestElement([0,0,0,0])).toBe(0)
        expect(findSecondBiggestElement([-12,0,-254,-333])).toBe(-12)  
        expect(findSecondBiggestElement([1])).toBe("There in no second element") 
    });
});