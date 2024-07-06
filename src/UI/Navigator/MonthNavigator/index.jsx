// components
import Navigator from '@ui/Navigator';

// utils
import PropTypes from 'prop-types';

import { keyToMonth } from '@constants/mappings';

const MonthNavigator = ({ state, handler }) => {

    const navigate = e => {
        const direction = e.currentTarget.dataset.direction;
        let current = state.number;
        let year = state.year;
    
        if (direction === 'prev') {
            if (current !== 0) {
                current--;
            } else {
                current = 11; // Go to December of the previous year
                year--; // Decrement the year
            }
        } else {
            if (current !== 11) {
                current++;
            } else {
                current = 0; // Go to January of the next year
                year++; // Increment the year
            }
        }
    
        // Update month and year in state
        handler(prevState => ({
            ...prevState,
            number: current,
            year: year, // Update the year too
            label: `${keyToMonth[current]} ${year}`
        }));
    };

    return (
        <Navigator handler={navigate}
            text={state.label}
            nextDisabled={state.number === new Date().getMonth() && state.year === new Date().getFullYear()}
        />
    );
};

MonthNavigator.propTypes = {
    state: PropTypes.shape({
        number: PropTypes.number.isRequired,
        label: PropTypes.string.isRequired
    }).isRequired,
    handler: PropTypes.func.isRequired
};

export default MonthNavigator;
