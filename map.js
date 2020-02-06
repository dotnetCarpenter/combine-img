// @ts-check

import each from './each.js'

/**
 * @template A,B
 * @param {{(arg0: A, arg1: number):B}} f Callback
 * @param {A[]} list Array-like
 * @returns {B[]}
 */
export default function map(f, list) {
	const a = new Array(list.length)

	each((value, index) => {
		a[index] = f(value, index)
	}, list)

	return a
}
