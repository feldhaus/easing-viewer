/* eslint-disable no-eval */
export function createFunction(equation) {
  try {
    return eval(`(x) => {\n${equation}\n}`);
  } catch (e) {
    return undefined;
  }
}
