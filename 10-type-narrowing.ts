// Type Narrowing Examples

// Example 1: Type Guard with null check
const inputEl = document.getElementById('user-name')
if (!inputEl) {
    throw new Error('Element not found!');
}
console.log('Input value:', (inputEl as HTMLInputElement).value)

// Example 2: Optional Chaining (?.)
const inputEl2 = document.getElementById('user-name')
console.log('Input value (optional):', (inputEl2 as HTMLInputElement)?.value) // Returns undefined if inputEl2 is null

// Example 3: Non-null Assertion (!)
const inputEl3 = document.getElementById('user-name')!
console.log('Input value (asserted):', (inputEl3 as HTMLInputElement).value) // TypeScript trusts you, but may crash if null

// Example 4: Type Assertion (as)
const inputEl4 = document.getElementById('user-name') as HTMLInputElement
console.log('Input value (cast):', inputEl4.value) // Tell TypeScript it's an HTMLInputElement

// Example 5: Type narrowing with union types
function processValue(value: string | number | null): string {
    if (value === null) {
        return 'Value is null'
    }
    if (typeof value === 'string') {
        return `String: ${value.toUpperCase()}`
    }
    return `Number: ${value * 2}`
}

console.log(processValue('hello'))
console.log(processValue(42))
console.log(processValue(null))

// Example 6: Type narrowing with type guards
type User = { name: string; age: number }
type Admin = { name: string; role: string }

function isAdmin(person: User | Admin): person is Admin {
    return 'role' in person
}

const people: (User | Admin)[] = [
    { name: 'Embrie', age: 22 },
    { name: 'Bob', role: 'admin' }
]

people.forEach(person => {
    if (isAdmin(person)) {
        console.log(`Admin: ${person.role}`)
    } else {
        console.log(`User: ${person.age} years old`)
    }
})