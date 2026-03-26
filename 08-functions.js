"use strict";
(() => {
    // Function Return Value Types
    function add(a, b) {
        return a + b;
    }
    console.log('add(5, 10):', add(5, 10));
    // add("5", 10)
    // Special Type `void` - return nothing
    // Function doesn't return a meaningful value, but it does finish
    function log(message) {
        console.log(message);
    }
    log("Hello, World!");
    // Another Special Type `never`
    // Function never finishes normally (throws error, infinite loop)
    function logAndThrow(errorMessage) {
        console.log(errorMessage);
        throw new Error(errorMessage);
    }
    // Function as Types
    // Useful for callback functions
    // () => {} is not same as () => void
    // () => {} - arrow function
    // () => void - function type
    function performJob(cb) {
        // ...
        cb('Job Done!');
    }
    let logMsg = (msg) => {
        console.log(msg);
    };
    performJob(logMsg);
    let user = {
        name: "Embrie",
        age: 22,
        // greet: function() {
        //     return this.name
        // }
        greet() {
            console.log(`Hello, ${this.name}`);
            return this.name;
        }
    };
    user.greet();
})();
