"use strict";
(() => {
    let Role;
    (function (Role) {
        Role[Role["SuperAdmin"] = 0] = "SuperAdmin";
        //SuperAdmin = 1,
        //SuperAdmin = 'SuperAdmin',
        // Teacher,
        Role["Teacher"] = "Teacher";
        // Student,
        Role["Student"] = "Student";
    })(Role || (Role = {}));
    let userRole = 0;
    //let userRole: Role = Role.SuperAdmin;
    console.log(userRole);
    console.log(Role);
})();
