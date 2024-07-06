// redux
import { useSelector, useDispatch } from 'react-redux';
import { increaseDateIndex, decreaseDateIndex, selectDateIndex, setDateIndex } from '@store/slices/dateIndexSlice';

const useDateNav = (array) => {

    const dispatch = useDispatch();
    const index = useSelector(selectDateIndex);

    const navigate = e => {
        const { direction } = e.currentTarget.dataset;
        if (direction === 'next') {
            index + 1 === array.length ? setDateIndex(0) : dispatch(increaseDateIndex());

        } else if (direction === 'prev') {
            index - 1 < 0 ? setDateIndex(array.length - 1) : dispatch(decreaseDateIndex());
        }
    }

    return {
        index,
        navigate
    };
}

export default useDateNav;