import moment from 'moment';
import { addDays, differenceInYears, differenceInMonths, format, parseISO, getYear, getMonth, getDate } from 'date-fns';

export const getYearDaysArray = () => {
    const year = moment().year();
    const days = [];
    const totalDays = moment().year(moment().year()).endOf('year').diff(moment().year(moment().year()).startOf('year'), 'days') + 1;
    for (let i = 1; i <= totalDays; i++) {
        let date = moment().year(year).dayOfYear(i);
        days.push({
            date: date,
            long: date.format('dddd, MMMM DD'),
            short: date.format('DD/MM/YYYY'),
        });
    }
    return days;
}

export const getMonthArray = () => {
    const year = moment().year();
    const months = [];
    for (let i = 1; i <= 12; i++) {
        let month = moment().year(year).month(i - 1);
        months.push({
            month: month,
            formatted: month.format('MMMM, YYYY')
        });
    }
    return months;
};

export const getYearArray = () => {
    const startYear = 2000;
    const endYear = 2050;
    const years = [];

    for (let year = startYear; year <= endYear; year++) {
        years.push({
            year: year,
            formatted: year.toString()
        });
    }
    return years;
};


export const getWeekArray = () => {
    const year = moment().year();
    const weeks = [];
    const totalWeeks = moment().year(moment().year()).endOf('year').diff(moment().year(moment().year()).startOf('year'), 'weeks') + 1;
    for (let i = 1; i <= totalWeeks; i++) {
        let week = moment().year(year).week(i);

        weeks.push({
            week: i,
            startShort: week.startOf('week').format('MMM, DD'),
            endShort: week.endOf('week').format('MMM, DD'),
            startLong: week.startOf('week').format('MMMM, DD'),
            endLong: week.endOf('week').format('MMMM, DD'),
        });
    }
    return weeks;
}

// get 15 days from today
export const getDaysArray = (direction = 'future', count = 15) => {
    const days = [];
    for (let i = 0; i < count; i++) {

        let day = direction === 'future' ? moment().add(i, 'days') : moment().subtract(i, 'days');
        days.push({
            day: day,
            formatted: day.format('dddd, MMMM DD'),
            short: day.format('DD/MM/YYYY'),
        });
    }

    // reverse array if direction is past
    if (direction === 'past') {
        days.reverse();
    }
    return days;
}

export const getMonthAndYear = (date) => {

    // get month number and year
    return {
        month: moment(date).format('M'),
        year: moment(date).format('YYYY')
    }
}

export const getDateFromIndex = (index = 0) => {
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    var newDate = addDays(currentDate, index);
    return newDate;
}

export const getFormattedDate = (date) => {

    // if date is string
    if (typeof date === 'string') {
        date = parseISO(date);
    }

    return format(date, 'yyyy-MM-dd');
}

// calendar events
export const getCalendarStartAndEndDates = (currentDate, view = 'month') => {
    let startDate, endDate;

    switch (view) {
        case 'month':
            startDate = moment(currentDate).startOf('month').startOf('week').toDate();
            endDate = moment(currentDate).endOf('month').endOf('week').toDate();
            break;

        case 'day':
            startDate = moment(currentDate).startOf('day').toDate();
            endDate = moment(currentDate).endOf('day').toDate();
            break;

        case 'week':
            startDate = moment(currentDate).startOf('week').toDate();
            endDate = moment(currentDate).endOf('week').toDate();
            break;

        default:
            throw new Error(`Unknown view: ${view}`);
    }

    return { startDate, endDate };
}

export const isSameDate = (index, appointmentDate) => {
    const indexDate = getDateFromIndex(index);
    const parsedAppointmentDate = parseISO(appointmentDate);

    const areDatesEqual = getYear(indexDate) === getYear(parsedAppointmentDate) &&
        getMonth(indexDate) === getMonth(parsedAppointmentDate) &&
        getDate(indexDate) === getDate(parsedAppointmentDate);

    return areDatesEqual;
}

export const getAgeInMonthsFromDateOfBirth = (dateOfBirth) => {
    const currentDate = new Date();
    const parsedDateOfBirth = parseISO(dateOfBirth);

    const yearsDifference = differenceInYears(currentDate, parsedDateOfBirth);
    const monthsDifference = differenceInMonths(currentDate, parsedDateOfBirth) % 12;

    return yearsDifference * 12 + monthsDifference;
};

// get age in years from date of birth. Add months if age is less than 3 years
export const getAgeFromDateOfBirth = (dateOfBirth) => {
    const currentDate = new Date();
    const parsedDateOfBirth = parseISO(dateOfBirth);

    const yearsDifference = differenceInYears(currentDate, parsedDateOfBirth);
    const monthsDifference = differenceInMonths(currentDate, parsedDateOfBirth) % 12;

    return {
        years: yearsDifference,
        months: yearsDifference < 3 ? monthsDifference : 0
    }
};

export const timeToMinutes = (time) => {
    const [hours, minutes] = time.split(':').map(Number);
    return Math.min(24, Math.max(0, hours)) * 60 + Math.min(60, Math.max(0, minutes));
}

export const convertTimeToDate = (date, time) => {
    const [hours, minutes] = time.split(':').map(Number);
    const newDate = new Date(date);
    newDate.setHours(hours, minutes, 0, 0); // Set seconds and milliseconds to 0
    return newDate;
};

export const generateTimeOptions = (timeFormat, interval, openingTime = '00:00', closingTime = '24:00') => {
    const options = [];
    const is12HourFormat = timeFormat === '12-hour';
    const startMinutes = Math.max(0, timeToMinutes(openingTime));
    const endMinutes = Math.min(1440, timeToMinutes(closingTime));

    for (let minutes = startMinutes; minutes <= endMinutes; minutes += interval) {
        if (minutes >= 1440) { // Skip times beyond 24:00
            continue;
        }

        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;

        let label;
        if (is12HourFormat) {
            const period = hours < 12 || hours === 24 ? 'AM' : 'PM';
            const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
            label = `${formattedHours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')} ${period}`;
        } else {
            label = `${hours.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}`;
        }

        options.push({ value: label, label });
    }

    return options;
}

export const getCombinedDateTime = (dateString, timeString) => {

    if (!dateString || !timeString) {
        throw new Error("Invalid date or time string provided.");
    }

    const [hours, minutes] = timeString.split(':').map(Number);
    const date = new Date(dateString);

    if (isNaN(date.getTime())) {
        throw new Error("Invalid date string format.");
    }

    date.setHours(hours, minutes, 0, 0);
    return date;
}