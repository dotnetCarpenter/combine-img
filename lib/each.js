// @ts-check

/**
 * The each() method executes a provided function once for each list element.
 * @template A,B
 * @param {{(arg0: A, arg1: number):B}} f Callback
 * @param {A[]} list Array-like
 */
export default function each(f, list) {
	const max = list.length

	for (let i = 0; i < max; ++i) {
		f(list[i], i)
	}
}
