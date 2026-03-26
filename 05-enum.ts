(() => {
    enum Role {
        SuperAdmin,
        //SuperAdmin = 1,
        //SuperAdmin = 'SuperAdmin',
        // Teacher,
        Teacher = 'Teacher',
        // Student,
        Student = 'Student',
    }

    let userRole: Role = 0;
    //let userRole: Role = Role.SuperAdmin;

    console.log(userRole);
    console.log(Role);
})()