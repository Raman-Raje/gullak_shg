import config from '@config/config';

// mappings of menu to screens
export const sideBarMenuToKey = {
    appointments: 0,
    prescription: 1,
    calendar: 2,
    appointments: 3,
    patients: 4,
    finances: 5,
    settings: 6,
    charts: 7,
    graphs: 8,
}

// key to months mapping
export const keyToMonth = {
    0: ' January ',
    1: ' Febuary ',
    2: '  March  ',
    3: '  April  ',
    4: '   May   ',
    5: '  June   ',
    6: '  July   ',
    7: ' August  ',
    8: 'September',
    9: ' October ',
    10: 'November ',
    11: 'December '
};


// sidebarm menu to Role mapping
export const sideBarMenuToRole = {
    appointments: [config.ROLES.ADMIN, config.ROLES.DOCTOR, config.ROLES.USER],
    prescription: [config.ROLES.ADMIN, config.ROLES.DOCTOR],
    calendar: [config.ROLES.ADMIN, config.ROLES.DOCTOR],
    all_appointments: [config.ROLES.ADMIN, config.ROLES.DOCTOR, config.ROLES.USER],
    all_patients: [config.ROLES.ADMIN, config.ROLES.DOCTOR],
    finances: [config.ROLES.ADMIN],
    settings: [config.ROLES.ADMIN, config.ROLES.DOCTOR, config.ROLES.USER],
    charts: [config.ROLES.ADMIN, config.ROLES.DOCTOR],
    graphs: [config.ROLES.ADMIN, config.ROLES.DOCTOR],
}


// function to verify if the user has access to the menu
export const verifyAccess = (role, menu) => {

    if (sideBarMenuToRole[menu].includes(role)) {
        return true
    }
    return false
}

