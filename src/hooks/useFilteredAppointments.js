import { useMemo } from 'react';


const useFilteredAppointments = (appointments, search, category, doctor) => {

    return useMemo(() => {

        return appointments.filter(item => {
            // Convert search term to lowercase for case-insensitive comparison
            const searchLower = (search || '').toLowerCase().trim();

            // Check if each field matches the search query
            const queryMatch = item?.fullName.toLowerCase().includes(searchLower) ||
                // Uncomment if needed: item?.doctor.toLowerCase().includes(searchLower) ||
                item?.appointmentType.toLowerCase().includes(searchLower);

            // Check if the category and doctor match
            const categoryMatch = category.value === 'all' || item.appointmentStatus === category.value;
            const doctorMatch = doctor.value === 'all' || item.doctor === doctor.value;

            // Return true if all conditions are met
            return queryMatch && categoryMatch && doctorMatch;
        });
    }, [appointments, search, category, doctor]);
};

export default useFilteredAppointments;
