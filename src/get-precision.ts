/**
 * get-precision
 * Count the number of digits to the right of a decimal
 */

import { Maybe } from 'purify-ts/Maybe'

const fromExponential = require('from-exponential')


/**
 * Count the number of digits to the right of a decimal.
 *
 * @param value Number with which to quantify precision
 * @returns Number of digits to right of decimal place in `value`
 */
export default function getPrecision(value: number): number {
    if (Math.floor(value) !== value) {
        return Maybe
            .fromNullable(fromExponential(value).split(".")[1])
            .map((s: string[]) => s.length)
            .orDefault(0)
    } else {
        return 0
    }
}
