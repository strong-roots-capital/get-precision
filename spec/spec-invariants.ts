import { testProp, fc } from 'ava-fast-check'
import { expect } from 'chai'
import * as math from 'mathjs'


/**
 * Library under test
 */

import getPrecision from '../src/get-precision'

testProp(
    'should identify the number of digits in the mantissa',
    [fc.array(fc.double())],
    (xs) => {
        xs.forEach(value => {
            // console.log('Testing value', value)

            /**
             * Assertion goes as follows:
             * - multiply by 10^countDecimal(value) to get an integer
             * - this integer / 10 ought to have a fractional part,
             *   showing we counted the number of decimals and no more
             */
            const integer = math.multiply(
                math.bignumber(value),
                math.pow(10, getPrecision(value))
            )

            expect(integer).to.satisfy(math.isInteger)
            expect(math.divide(integer, 10)).to.not.satisfy(math.isInteger)
        })
    }
)
