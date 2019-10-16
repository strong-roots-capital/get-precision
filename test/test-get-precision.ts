import test from 'ava'


/**
 * Library under test
 */

import getPrecision from '../src/get-precision'


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const countMantissa = (t: any, value: number, precision: number) => {
    t.is(precision, getPrecision(value))
}
countMantissa.title = (_ = '', value: number, precision: number) =>
    `should accurately count mantissa of ${value} to be ${precision}`

const tests: [number, number][] = [
    [ 0, 0 ],
    [ 0.00000001, 8 ],
    [ 0.0000001, 7 ],
    [ 0.000005, 6],
    [ 0.00001, 5 ],
    [ 0.05, 2 ],
    [ 0.5, 1 ],
]

tests.forEach(([value, precision]) => test(countMantissa, value, precision))
