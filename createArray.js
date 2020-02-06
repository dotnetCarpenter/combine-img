// @ts-check
'use strict'

import map from './map.js'

/**
 * Create a new array with `size` of empty items
 * and calls `f` to fill each of them.
 * Note: Akind to `Array.from` but takes a
 * function instead of an array-like object.
 * @template A,B
 * @param {number} size Items in the array
 * @param {{(arg0: A, arg1: number):B}} f Callback function
 * @returns {B[]} An array with the values that the callback function returned
 */
export default function createArray(size, f) {
	return map(f, new Array(size))
}
