"use strict";
(() => {
    let userRole = 'student';
    const user = {
        name: 'Embrie',
        age: 22,
        role: 'student',
        permission: ['read', 'write']
    };
    function access(role) {
        switch (role) {
            case 'admin':
                return 'Admin has full access';
            case 'guess':
                return 'Guest has limited access';
            case 'teacher':
                return 'Teacher has moderate access';
            case 'student':
                return 'Student has read-only access';
            default:
                return 'Unknown role';
        }
    }
    console.log('User:', user);
    console.log('User role:', userRole);
    console.log('Access:', access(userRole));
    console.log('User access:', access(user.role));
})();
