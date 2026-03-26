// Optional Values in parameter
function generateError(msg?: string) {
    throw new Error(msg)
}

// generateError("An error occured"); // This would throw an error
// generateError() // This would throw with undefined message


(() => {
    // Optional Values in object properties
    type User = {
        name: string;
        age: number;
        role?: 'admin' | 'guest'
    }

    let user: User = {
        name: 'Embrie',
        age: 22
    }

    console.log('User:', user)
    console.log('User name:', user.name)
    console.log('User age:', user.age)
    console.log('User role:', user.role) // undefined

    // Optional property access
    if (user.role) {
        console.log('Role exists:', user.role)
    } else {
        console.log('Role is optional and not set')
    }
})()

// Nullish Coalescing `??` operator 
let input = ''
const didProvideInput = input ?? false;
console.log('Nullish coalescing (??):', didProvideInput) // false? No, '' is not null/undefined

// Compare with ||
const didProvideInputOr = input || false;
console.log('Logical OR (||):', didProvideInputOr) // false because '' is falsy

// More examples
let nullValue: string | null = null
let undefinedValue: string | undefined = undefined
let emptyString = ''
let zero = 0

console.log('null ?? "default":', nullValue ?? 'default')
console.log('undefined ?? "default":', undefinedValue ?? 'default')
console.log('"" ?? "default":', emptyString ?? 'default') // Keeps empty string
console.log('0 ?? "default":', zero ?? 'default') // Keeps 0

console.log('null || "default":', nullValue || 'default')
console.log('undefined || "default":', undefinedValue || 'default')
console.log('"" || "default":', emptyString || 'default') // Falls back
console.log('0 || "default":', zero || 'default') // Falls back

// try it on browser console log to see results
// update it `??` to `||`
// `||` check for falsy not false - falsy = null, undefined, 0, empty string, etc
// ?? check only if null or undefined

// Use || when you want to fall back on any falsy value.
// Use ?? when you only want to fall back on null or undefined.