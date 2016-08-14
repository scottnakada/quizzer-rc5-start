describe("A suite", function () {
  it("contains spec with an expectation", function () {
    expect(true).toBe(true);
  });
});


describe('Chapter 2 tests', () => {
  it('Our first Jasmine test', () => {
    expect(true).toBe(true);
  });
  it('2 + 2 equals 4', ()=> {
    expect(2 + 2).toEqual(4);
  });
});
