import { rpn } from "./rpn";

describe("rpn()", () => {
    it("returns number when passed", () => {
      expect(rpn("2")).toBe(2);
    });


  it("correctly adds 2 numbers", function () {
    expect(rpn("2 0 +")).toBe(2);
  });


  it(`correctly adds 2 numbers`, async () => {
    expect(rpn("2 2 +")).toBe(4);
  });

  it("correctly divides  2  numbers", () => {
    expect(rpn("2 2 /")).toBe(1);
  });
});
