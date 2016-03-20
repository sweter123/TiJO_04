describe('app', function () {
    'use strict';
    var app = window.app;

    describe('Division function', function () {
        it('should divide number a by b', function () {
            expect(app.divide(10, 5)).toEqual(2);
            expect(app.divide(15, 3)).toEqual(5)
        });
        it('should divide number a by b only when a is more than 1 and less than 100', function () {
            expect(app.divide(20, 5)).toEqual(4);
        });
        it('should return false when a is less than 1', function () {
            expect(app.divide(-2, 6)).toEqual(false);
        });
        it('should return false when a is more than 100', function () {
            expect(app.divide(105, 3)).toEqual(false);
        });
        it('should divide number a by b when a is 1', function () {
            expect(app.divide(1, -1)).toEqual(-1);
        });
        it('should divide number a by b when a is 100', function () {
            expect(app.divide(100, 10)).toEqual(10);
        });
        it('should divide number a by b when a is 0', function () {
            expect(app.divide(0, 1)).toEqual(false);
        });
        it('should divide number a by b when a is 101', function () {
            expect(app.divide(101, 10)).toEqual(false);
        });
        it('should return false when b is grater than a', function () {
            expect(app.divide(101, 103)).toEqual(false);
        });
        it('should return false when b is equal 0', function () {
            expect(app.divide(101, 0)).toEqual(false);
        });
    });
    describe('getDescendingNumbers function', function () {
        it('should return "a a-1 ... b" when a > b', function () {
            expect(app.getDescendingNumbers(8, 2)).toEqual('8 7 6 5 4 3 2');
        });
        it('should return false when b > a', function () {
            expect(app.getDescendingNumbers(2, 8)).toEqual(false);
        });
        it('should return false when a is not number', function () {
            expect(app.getDescendingNumbers("s", 8)).toEqual(false);
        });
        it('should return false when b is not number', function () {
            expect(app.getDescendingNumbers(2, "s")).toEqual(false);
        });
    });
    describe('areaOfTrapezoid function', function () {
        it('should return area of trapezoid if a < 0 && b < 0 && c < 0', function () {
            expect(app.areaOfTrapezoid(8, 2, 3)).toEqual(15);
        });
        it('should return false if c < 0', function () {
            expect(app.areaOfTrapezoid(3, 5, -1)).toEqual(false);
        });
        it('should return false if b < 0', function () {
            expect(app.areaOfTrapezoid(3, -5, 1)).toEqual(false);
        })
        it('should return false if a < 0', function () {
            expect(app.areaOfTrapezoid(-3, 5, 1)).toEqual(false);
        })
        it('should return false if b is not number', function () {
            expect(app.areaOfTrapezoid(3, "g", 1)).toEqual(false);
        })
        it('should return false if c is not number', function () {
            expect(app.areaOfTrapezoid(3, 5, "a")).toEqual(false);
        })
        it('should return false if a is not number', function () {
            expect(app.areaOfTrapezoid("a", 5, 1)).toEqual(false);
        })
    });
    describe('maxArray function', function () {
        it('should return max of array if array contains numbers', function () {
            expect(app.maxArray([1,2,3,4,5,8])).toEqual(8);
        });
        it('should return false if contains invalid characters', function () {
            expect(app.maxArray([1,2,3,"b",6,7,8])).toEqual(false);
        });
        it('should return max of array if array contains only one element', function () {
            expect(app.maxArray([1])).toEqual(1);
        });
        it('should return max of array if array contains few same elements', function () {
            expect(app.maxArray([3,3,3,3,3,3,3])).toEqual(3);
        });
    });
    describe('squareOdd', function () {
        it('should return array with squared odd elements with unchanged even numbers if array contains odd numbers and even numbers', function () {
            expect(app.squareOdd([1,2,3,4,5,8])).toEqual([1,2,9,4,25,8]);
        });
        it('should return array with squared odd elements if array contains only odd numbers', function () {
            expect(app.squareOdd([1,3,5,7,9,11])).toEqual([1,9,25,49,81,121]);
        });
        it('should return array with squared odd elements if array contains odd numbers with unchanged string elements', function () {
            expect(app.squareOdd([1,3,"g",7,9,11])).toEqual([1,9,"g",49,81,121]);
        });
        it('should return false if array contains elements other than numbers or strings', function () {
            expect(app.squareOdd([1,3,"g",7,true,11])).toEqual(false);
        });
    });
});
