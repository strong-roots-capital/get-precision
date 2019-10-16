import getPrecision from '../src/get-precision'

console.log(getPrecision(0.5))
//=>1

console.log(getPrecision(0.05))
//=>2

console.log(getPrecision(0.00001))
//=>5

console.log(getPrecision(0.000005))
//=>6

console.log(getPrecision(0.0000001))
//=>7

console.log(getPrecision(0.00000001))
//=>8

console.log(getPrecision(1.003530591958679e-10))
//=>25
