// Special Type - null
let a: null;

a = null
console.log('a (null):', a, 'type:', typeof a)
// a = "Hi"

let b: null | string

b = null
console.log('b = null:', b, 'type:', typeof b)
b = "Hi"
console.log('b = "Hi":', b, 'type:', typeof b)
// b = 10

// Special Type - undefined
let c: undefined;

c = undefined
console.log('c (undefined):', c, 'type:', typeof c)
// c = null
// c = "Hi"

let d: undefined | string

d = undefined
console.log('d = undefined:', d, 'type:', typeof d)
d = "Hi"
console.log('d = "Hi":', d, 'type:', typeof d)
// d = null
// d = 10
