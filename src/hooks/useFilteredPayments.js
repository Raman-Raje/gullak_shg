import { useMemo } from 'react';

const useFilteredPayments = (payments, search) => {

    return useMemo(() => {

        return payments.filter((payment) => {

            // Ensure search is a string and trim it
            const searchLower = (search || '').toLowerCase().trim();

            // Check if each field matches the search query
            const fullNameMatch = payment.appointment?.fullName.toLowerCase().includes(searchLower);
            const doctorNameMatch = payment.doctorName.toLowerCase().includes(searchLower);
            const statusMatch = payment.status.toLowerCase().includes(searchLower);

            // Return true if any of the fields match
            return fullNameMatch || doctorNameMatch || statusMatch;
        });
    }, [payments, search]);
}

export default useFilteredPayments;