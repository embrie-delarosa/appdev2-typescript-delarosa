# TypeScript Documentation
Official site: [https://www.typescriptlang.org/](https://www.typescriptlang.org/)

---

## Install TypeScript Globally
```
npm install -g typescript
```

## What is Typescript
TypeScript is a superset of JavaScript that adds static typing and compiles to plain JavaScript.


## Why use Typescript
- Adds type safety
- Improves tooling and developer experience
- Helps maintain large projects
- Supports modern JavaScript features

## How to Compile a TypeScript File to JavaScript
```bash
tsc filename.ts
```

## How to Add Restriction if Errors Exist
```
{
  "compilerOptions": {
    "strict": true,
    "noEmitOnError": true
  }
}
```

## 01-basics.ts
Demonstrates **type inference**, **explicit typing**, and what happens when assigning mismatched types.

## 02-vanilla-js-types.js
Shows how JavaScript’s `typeof` operator works to check variable types at runtime.

## 03-flexible-types.ts
Illustrates the `any` type, allowing reassignment to different types and showing its flexibility (and risks).

## 04-arrays-objects.ts
Covers arrays with union types, object typing with nested properties, and the `Record` type for flexible objects.

## 05-enum.ts
Introduces enums, specifically string enums, and shows how to assign `enum` values properly.

## 06-alternative-to-enum.ts
Uses literal union types (`'admin' | 'guest' | 'teacher' | 'student'`) as a flexible alternative to enums, providing type safety without enum syntax while demonstrating access control logic.

## 07-custom-type-role.ts
Demonstrates creating custom types using `type` aliases for complex objects and role-based access, showing how to define reusable type definitions for better code organization.

## 08-functions.ts
Explores function typing including return types (`number`, `void`, `never`), callback functions, and object methods with `this` context, illustrating TypeScript's function type system.

## 09-special-types.ts
Covers the special types `null` and `undefined`, showing how to use them in union types and demonstrating type safety with potentially absent values.

## 10-form.html and 10-type-narrowing.ts
Combines an HTML form with TypeScript code that demonstrates type narrowing techniques: type guards, optional chaining (`?.`), non-null assertions (`!`), and type assertions (`as`) for safe DOM manipulation.

## 11-optional.ts
Shows optional function parameters, optional object properties, and the difference between nullish coalescing (`??`) and logical OR (`||`) operators for handling default values.