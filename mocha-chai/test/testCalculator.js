const {expect} = require("chai");
var calc = require("../lib/calculator");

describe("Testing calculator", function () {
    before(function () {

    });
    it("add 4+5 should be 9", function () {
        expect(calc.add(4,5)).to.equal(9);
    });
    it("subtract 4-5 should be -1", function () {
        expect(calc.sub(4,5)).to.equal(-1);
    });
    it("multiply 4 x 5 should give 20", function () {
        expect(calc.mult(4,5)).to.equal(20);
    });
    it("div 10 by 2 should give 5", function () {
        expect(calc.div(10,2)).to.equal(5);
    });
    it("div by zero should raise an exeption", function () {
        expect(function(){
            calc.div(4,0)}).to.throw(Error);
    }); 
}); 