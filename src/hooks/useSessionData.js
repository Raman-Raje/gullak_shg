import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getDiagnosisFromSession, clearDiagnosisFromSession, setDiagnosisData } from '@store/slices/diagnosisSlice';
import { getMedicationFromSession, clearMedicationFromSession, setMedicationData } from '@store/slices/medicationSlice';
import { getObservationFromSession, clearObservationFromSession, setObservationData } from '@store/slices/observationSlice';

export const useClearSessionData = () => {
    const dispatch = useDispatch();

    const clearSessionData = useCallback((appointmentId) => {
        dispatch(clearObservationFromSession({ appointmentId }));
        dispatch(clearMedicationFromSession({ appointmentId }));
        dispatch(clearDiagnosisFromSession({ appointmentId }));
    }, [dispatch]);

    return clearSessionData;
};

export const useSetPrescriptionData = () => {
    const dispatch = useDispatch();

    const setPrescriptionData = useCallback((prescription) => {
        dispatch(setObservationData(prescription.observation));
        dispatch(setDiagnosisData(prescription.diagnosis));
        dispatch(setMedicationData(prescription.medication));
    }, [dispatch]);

    return setPrescriptionData;
};

export const useFetchSessionData = () => {
    const dispatch = useDispatch();

    const fetchSessionData = useCallback((appointmentId) => {
        dispatch(getObservationFromSession({ appointmentId }));
        dispatch(getMedicationFromSession({ appointmentId }));
        dispatch(getDiagnosisFromSession({ appointmentId }));
    }, [dispatch]);

    return fetchSessionData;
};