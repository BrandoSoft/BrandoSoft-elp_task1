import {rpn} from "./rpn";

describe("rpn()", () => {
    it("returns number when passed", () => {
        expect(rpn("2")).toBe(2);
    });

    it("correctly adds 2 numbers, when 0 included", () => {
        expect(rpn("2 0 +")).toBe(2);
    });

    it(`correctly adds 2 numbers`, () => {
        expect(rpn("2 2 +")).toBe(4);
    });

    it("correctly divides  2  numbers", () => {
        expect(rpn("2 2 /")).toBe(1);
    });

    it(`more than one operation and multiplication is performed correctly `, () => {
        expect(rpn("3 1 – 2 2 + *")).toBe(8);
    });

    it(`throw Error "Invalid Expression" when input is empty string or letters`, () => {
        expect(()=>rpn("" || "abc"|| "AbC")).toThrow("Invalid Expression");
    });
    it(`throw Error "Not Enough Operands" when more operators than possible actions`, () => {
        expect(()=>rpn("1 +")).toThrow("Not Enough Operands");
    });
    it(`throw Error "Not Enough Operators" when more operands then possible actions`, () => {
        expect(()=>rpn("1 1 1 - ")).toThrow("Not Enough Operators");
    });
});
