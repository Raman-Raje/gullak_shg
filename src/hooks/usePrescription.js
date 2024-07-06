import { useState,useCallback } from 'react';
import axios from '@api/axios';
import { toast } from 'react-toastify';

// hooks
import { useClearSessionData, useSetPrescriptionData } from '@hooks/useSessionData';

export const useCompleteAppointment = () => {
    const [loading, setLoading] = useState(false);
    const clearSessionData = useClearSessionData();
    const setPrescriptionData = useSetPrescriptionData();

    const handleCompleteAppointment = useCallback(async (appointmentObj, observationData, diagnosisData, medicationData) => {
        try {
            setLoading(true);

            const prescriptionObj = {
                observation: observationData,
                diagnosis: diagnosisData,
                medication: medicationData
            };

            const appointmentId = appointmentObj?.appointmentId;
            const response = await axios.put(`/completeappointment`, { appointmentObj, prescriptionObj });

            if (response.status === 200) {
                toast.success('Appointment Completed Successfully');
                clearSessionData(appointmentId); // Clear session data on successful completion
                setPrescriptionData(prescriptionObj); // Set the data in Redux store
            }
        } catch (error) {
            toast.error('Something went wrong');
        } finally {
            setLoading(false);
        }
    }, [clearSessionData, setPrescriptionData]);

    return { handleCompleteAppointment, loading }
}

export const useGetPrescription = () => {

    const [loading, setLoading] = useState(false);
    const setPrescriptionData = useSetPrescriptionData();

    const getPrescriptionData = useCallback(async (appointmentId) => {

        try {
            setLoading(true);
            const response = await axios.get(`/getPrescription/${appointmentId}`);
            if (response.status === 200) {
                const prescription = response.data.prescription;
                setPrescriptionData(prescription);
            }

        } catch (error) {
            toast.error('Error in fetching prescription data');
        } finally {
            setLoading(false);
        }
    }, [setPrescriptionData]);

    return { getPrescriptionData, loading }
}