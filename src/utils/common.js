import config from "@config/config";

// isEmptyObject
export const isEmptyObject = (obj) => {
    if (!obj) return true; // returns true if object is null or undefined

    return Object.keys(obj).length === 0; // returns true if object is empty
};

// isEmptyArray
export const isEmptyArray = (arr) => {
    return arr.length === 0
}

// isEmpty array of objects
export const isEmptyArrayOfObjects = (arr) => {
    if (!arr) return true; // returns true if array is null or undefined

    if (arr.length === 0) return true; // returns true if array is empty

    return arr.every((obj) => Object.keys(obj).length === 0); // returns true if all objects in the array are empty
};

export const getAgeInMonths = (patientAgeYears, patientAgeMonths) => {
    if (!patientAgeMonths) {
        patientAgeMonths = 0;
    }
    return patientAgeYears * 12 + patientAgeMonths;
};

export const getDoctorName = (clinicProfile, doctorId) => {
    if (clinicProfile) {
        const doctors = clinicProfile?.doctors;

        if (!doctors) return doctorId;
        const doctor = doctors.find(doctor => doctor._id === doctorId);
        return doctor ? doctor.firstName + ' ' + doctor.lastName : doctorId;
    }
    return doctorId;
}

export const getDoctorsList = (clinicProfile, auth) => {
    const doctors = clinicProfile?.doctors || [];
    const { role, doctorId, clinicId } = auth?.user || {};

    // Create a new array with the clinic added
    const doctorsWithClinic = [{ id: clinicId, name: 'All' }, ...doctors];

    // Filter the list based on role if necessary
    const filteredDoctors = role === config.ROLES.DOCTOR
        ? doctorsWithClinic.filter(doctor => doctor._id === doctorId || doctor.id === clinicId)
        : doctorsWithClinic;

    // Map the doctors (and clinic) to the desired format
    return filteredDoctors.map(doctor => ({
        id: doctor._id || doctor.id, // Use _id if present, otherwise use id
        name: doctor.firstName ? `${doctor.firstName} ${doctor.lastName}` : doctor.name
    }));
};


export const getContact = (appointmentData) => {
    const { phone, email } = appointmentData;
    return phone ? phone : email;
}

export const toTitleCase = (str) => {

    if (typeof str !== 'string') {
        console.error('Input must be a string');
        return null;
    }

    if (str.trim() === '') {
        console.error('Input string cannot be empty');
        return null;
    }

    return str
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// method to get ageInYears and ageInMonths from ageInMonths
export const getAgeInYearsAndMonths = (ageInMonths) => {
    const years = Math.floor(ageInMonths / 12);
    const months = ageInMonths % 12;
    return { ageInYears: years, ageInMonths: months };
}

// sort appointmentTimes. appointmentTimes present in 24 hour format 'HH:mm-HH:mm'
export const sortAppointmentTimes = (times) => {
    return times.sort((a, b) => {
        // Split the time slots to get the start time of each slot
        const startTimeA = a.split('-')[0];
        const startTimeB = b.split('-')[0];

        // Compare the start times
        if (startTimeA < startTimeB) {
            return -1;
        }
        if (startTimeA > startTimeB) {
            return 1;
        }
        return 0;
    });
}

export const getDoctorAppointmentFee = (doctors, doctorId, appointmentType) => {

    // get doctor from array of doctors
    const doctor = doctors.find(doctor => doctor._id === doctorId);

    // get appointment fee
    const appointmentFee = doctor.appointmentFee[appointmentType];

    // return appointment fee
    return appointmentFee;
}

// get age in sring format
export const getAgeInString = (years, months) => {
    if (years === 0) {
        return `${months} months`;
    } else if (years < 3) {
        return `${years} year, ${months} months`;
    } else {
        return `${years} years`;
    }
}

export const getPrescriptionNavigationState = (appointmentStatus) => {

    const printEnabled = appointmentStatus === 'scheduled' || appointmentStatus === 'completed';  // enabled for scheduled and completed
    const sendEnabled = appointmentStatus === 'scheduled';  // enabled for scheduled and completed
    const clearEnabled = appointmentStatus === 'scheduled';  // enabled for scheduled only

    return { printEnabled, sendEnabled, clearEnabled };
}

// lowercase, trim string
export const lowercaseTrim = (str) => {
    return str.trim().toLowerCase();
}
