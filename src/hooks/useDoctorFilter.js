import { useState } from 'react';
import useAuth from '@hooks/useAuth';

const useDoctorFilter = () => {

    const { auth } = useAuth();
    const { doctorId } = auth?.user

    const doctorArr = [
        { value: 'all', label: 'All' },
        { value: doctorId, label: 'Mine' }
    ];

    const [doctor, setDoctor] = useState({ value: 'all', label: 'All' });
    
    return {
        doctorArr,
        doctor,
        setDoctor
    }
}

export default useDoctorFilter;