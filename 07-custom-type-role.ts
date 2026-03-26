(() => {
    // Type Aliases or Custom Types
    // use `type` keyword to create custom type
    type Role = 'admin' | 'guess' | 'teacher' | 'student'

    // Complex Object Type Definition
    type User = {
        name: string;
        age: number;
        role: Role; // you can use as well the Role type in Object type
        permission: string[];
    }

    let userRole: Role = 'student'

    const user: User = {
        name: 'Embrie',
        age: 22,
        role: 'student',
        permission: ['read', 'write']
    }

    function access(role: Role): string {
        switch (role) {
            case 'admin':
                return 'Admin has full access'
            case 'guess':
                return 'Guest has limited access'
            case 'teacher':
                return 'Teacher has moderate access'
            case 'student':
                return 'Student has read-only access'
            default:
                return 'Unknown role'
        }
    }

    console.log('User:', user)
    console.log('User role:', userRole)
    console.log('Access:', access(userRole))
    console.log('User access:', access(user.role))
})()