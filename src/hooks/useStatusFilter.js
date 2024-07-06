import {useState} from 'react';

const useStatusFilter = (targetArr) => {

    const [status, setStatus] = useState({value: "all", label: "all"});

    const getStatus = status => {
        return targetArr.filter(item => item.status === status.value);
    }

    return {
        status,
        setStatus,
        getStatus
    }
}

export default useStatusFilter;