export const colorTypes = [
    { cat: 'emergency', label: 'Emergency', color: 'red' },
    { cat: 'consultation', label: 'Consultation', color: 'azure' },
    { cat: 'test', label: 'Examination', color: 'teal' },
    { cat: 'checkup', label: 'Routine checkup', color: 'purple' },
    { cat: 'sick', label: 'Sick visit', color: 'orange' },
];

export const tasksColors = [
    { cat: 'work', color: 'teal' },
    { cat: 'travel', color: 'orange' },
    { cat: 'family', color: 'azure' },
    { cat: 'other', color: 'purple' }
]

// **************************** SHG Colors ****************************
export const statusColors = [
    { cat: 'active', color: 'green' },
    { cat: 'inactive', color: 'red' },
    { cat: 'suspended', color: 'yellow' },
];

export const roleColors = [
    { cat: 'admin', color: 'teal' },
    { cat: 'member', color: 'purple' },
    { cat: 'crp', color: 'orange' },
];

export const notificationColors = [
    { cat: 'info', color: 'blue' },
    { cat: 'warning', color: 'orange' },
    { cat: 'error', color: 'red' },
    { cat: 'success', color: 'green' },
];

export const loanStatusColors = [
    { cat: 'approved', color: 'green' },
    { cat: 'rejected', color: 'red' },
    { cat: 'pending', color: 'yellow' },
    { cat: 'disbursed', color: 'purple' },
    { cat: 'closed', color: 'teal' },
];

export const stringToColor = (string) => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}



// Types Mapping
export const typeMappings = {
    colorTypes,
    tasksColors,
};

// Function to get color based on category and type
export const getTypesColor = (colorType) => {
    const { cat, type } = colorType;

    // Get the corresponding type array from the mapping
    const types = typeMappings[type];

    if (!types) {
        // Handle invalid type here if necessary

        // generate random color
        const color = stringToColor(cat);
        return color;
    }

    // Find the color associated with the category
    const colorInfo = types.find((item) => item.cat === cat);

    if (!colorInfo) {
        // Handle invalid category here if necessary
        return null;
    }

    return colorInfo.color;
};