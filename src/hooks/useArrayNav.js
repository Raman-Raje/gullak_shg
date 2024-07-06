import {useState} from 'react';

const useArrayNav = (array , direction = 'start') => {
    const [index, setIndex] = useState(direction === 'start' ? 0 : array.length - 1);
    const navigate = e => {
        const {direction} = e.currentTarget.dataset;
        if (direction === 'next') {
            index + 1 === array.length ? setIndex(0) : setIndex(index + 1);

        } else if (direction === 'prev') {
            index - 1 < 0 ? setIndex(array.length - 1) : setIndex(index - 1);
        }
    }

    return {
        index,
        setIndex,
        navigate
    };
}

export default useArrayNav;