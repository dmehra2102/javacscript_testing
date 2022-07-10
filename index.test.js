const Sum = require("./sum_arguments.js");
const Time = require("./time_conversion.js");

describe("Testing for sum function",()=> {
    test('sum of numbers', () => {
        expect(Sum(1,2,3,4,5)).toBe(15);
    })
    test('sum of negative and positive numbers', () => {
        expect(Sum(-1,2,-3,4,-5)).toBe(-3);
    })
    test('sum of floating numbers', () => {
        expect(Sum(1,2.02,0.3,4.12,5)).toBe(12.4);
    })
    test('sum of mixed numbers', () => {
        expect(Sum(-1,0.2,-3.2,4)).toBe(0);
    })
});

// Time Conversion

describe("Testing for Time Conversion", ()=> {
    test("convert to seconds",()=> {
        expect(Time(14000)).toBe("14 Seconds");
    })
    test("convert to seconds",()=> {
        expect(Time(2094830)).toBe("34 Minutes 54 Seconds");
    })
    test("convert to seconds",()=> {
        expect(Time(44000)).toBe("44 Seconds");
    })
    test("convert to seconds",()=> {
        expect(Time(3600000)).toBe("1 Hours 0 Minutes 0 Seconds");
    })
    test("convert to seconds",()=> {
        expect(Time(20948305)).toBe("5 Hours 49 Minutes 8 Seconds");
    })
})