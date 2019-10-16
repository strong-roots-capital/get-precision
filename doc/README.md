
get-precision [![Build status](https://travis-ci.org/strong-roots-capital/get-precision.svg?branch=master)](https://travis-ci.org/strong-roots-capital/get-precision) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/get-precision.svg)](https://npmjs.org/package/@strong-roots-capital/get-precision) [![codecov](https://codecov.io/gh/strong-roots-capital/get-precision/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/get-precision)
==========================================================================================================================================================================================================================================================================================================================================================================================================================================================================================

> Count the number of digits to the right of a decimal

This package exists to improve on its predecessors with

*   strong typing
*   support for scientific notation

Install
-------

```shell
npm install @strong-roots-capital/get-precision
```

Use
---

```typescript
import getPrecision from '@strong-roots-capital/get-precision'

console.log(getPrecision(0.5))
//=>1

console.log(getPrecision(0.05))
//=>2

console.log(getPrecision(0.00001))
//=>5

console.log(getPrecision(0.00000001))
//=>8

console.log(getPrecision(1.003530591958679e-10))
//=>25
```

Acknowledgments
---------------

*   [from-exponential](https://github.com/shrpne/from-exponential)
*   [mathjs](https://github.com/josdejong/mathjs)
*   [fast-check](https://github.com/dubzzz/fast-check)

Related
-------

*   [countDecimals](https://github.com/aleclarson/countDecimals)

## Index

### Functions

* [getPrecision](#getprecision)

---

## Functions

<a id="getprecision"></a>

###  getPrecision

▸ **getPrecision**(value: *`number`*): `number`

*Defined in [get-precision.ts:17](https://github.com/strong-roots-capital/get-precision/blob/17b0f96/src/get-precision.ts#L17)*

Count the number of digits to the right of a decimal.

**Parameters:**

| Name | Type | Description |
| ------ | ------ | ------ |
| value | `number` |  Number with which to quantify precision |

**Returns:** `number`
Number of digits to right of decimal place in `value`

___

