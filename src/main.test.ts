import assert from "./main";

describe(`${assert.name}`, () => {
  const assertions = [
    [0, undefined],
    [0, undefined],
    [0, undefined],
  ] as [number, undefined][];
  const mock = jest.fn();
  const name = "";

  assert(assertions, name, mock);

  it("calls the provided function a number of times equal to the number of provided assertions.", () =>
    expect(mock).toHaveBeenCalledTimes(assertions.length));
});
