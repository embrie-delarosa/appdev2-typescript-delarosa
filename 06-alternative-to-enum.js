"use strict";
(() => {
    // Literal Types (Alternative to Enum)
    let userRole = 'admin';
    userRole = 'student';
    //userRole = 'superadmin' // Error: Type '"superadmin"' is not assignable
    function access(role) {
        switch (role) {
            case 'admin':
                return 'Admin access granted';
            case 'guest':
                return 'Guest access limited';
            case 'teacher':
                return 'Teacher access granted';
            case 'student':
                return 'Student access granted';
            default:
                return 'Unknown role';
        }
    }
    console.log('User role:', userRole);
    console.log('Access result:', access(userRole));
    console.log('Student access:', access('student'));
})();
