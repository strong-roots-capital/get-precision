# get-precision [![Build status](https://travis-ci.org/strong-roots-capital/get-precision.svg?branch=master)](https://travis-ci.org/strong-roots-capital/get-precision) [![npm version](https://img.shields.io/npm/v/@strong-roots-capital/get-precision.svg)](https://npmjs.org/package/@strong-roots-capital/get-precision) [![codecov](https://codecov.io/gh/strong-roots-capital/get-precision/branch/master/graph/badge.svg)](https://codecov.io/gh/strong-roots-capital/get-precision)

> Count the number of digits to the right of a decimal

This package exists to improve on its predecessors with

- strong typing
- support for scientific notation

## Install

```shell
npm install @strong-roots-capital/get-precision
```

## Use

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

## Acknowledgments

- [from-exponential](https://github.com/shrpne/from-exponential)
- [mathjs](https://github.com/josdejong/mathjs)
- [fast-check](https://github.com/dubzzz/fast-check)

## Related

- [countDecimals](https://github.com/aleclarson/countDecimals)
