/**
 * Test a function against an array of inputs and expected outputs and render the results to the console.
 * @param assertions An array of assertions where each assertion consists of a test argument and its expected result.
 * @param name The name of the function being tested.
 * @param onEvaluate A callback function to convert inputs into results.
 * @param onMessage? An optional callback function that renders this assertion as a human-readable string.
 * @typeParam T The input type of the function being tested.
 * @typeParam U The expected output type of the function being tested.
 */
export default <T, U>(
  assertions: [T, U][],
  name: string,
  onEvaluate: (value: T) => U,
  onMessage: (assertion: [T, U]) => string = ([input, expected]) =>
    `Returns ${expected} for ${input}`
): void =>
  describe(`\`${name}\``, () =>
    assertions.forEach((assertion) =>
      it(onMessage(assertion), () =>
        expect(onEvaluate(assertion[0])).toStrictEqual(assertion[1])
      )
    ));
