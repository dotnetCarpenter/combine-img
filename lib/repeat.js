// @ts-check
'use strict'

/**
 * Repeat `x` number of `times`, by appending to
 * `accu`. Returns `accu`.
 * @template T
 * @param {T} x What you want to repeat.
 * @param {number} times How many times to repeat. Negative values will throw.
 * @param {T[]} [accu] Default is an empty array.
 * @returns {T[]} Array of what you want to repeat.
 */
export default function repeat(x, times, accu = []) {
  // TODO: why not use Array.fill?
  if (times === 0)
    return accu;
  accu.push(x);
  return accu.concat(repeat(x, --times));
}
