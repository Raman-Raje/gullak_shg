import React, { useState, useEffect } from 'react';
import { differenceInDays, differenceInMonths, isEqual } from 'date-fns';
import DatePicker from 'react-datepicker';
import { DateInputWrapper } from '../Date/style';
import 'react-datepicker/dist/react-datepicker.css';
import { Input } from '@ui/Field';

const DurationPicker = ({ field, form, id }) => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  // Initialize with Formik's values if available
  useEffect(() => {
    if (field.value) {
      setDateRange([field.value.startDate, field.value.endDate]);
    }
  }, [field.value]);

  const calculateDaysOrMonths = () => {
    let duration = '';
    if (startDate && endDate) {
      if (isEqual(startDate, endDate)) {
        duration = '1 day';
      } else {
        const diffInDays = differenceInDays(endDate, startDate);
        if (diffInDays > 30) {
          const diffInMonths = differenceInMonths(endDate, startDate);
          duration = `${diffInMonths + 1} months`; // Add 1 to account for current month
        } else {
          duration = `${diffInDays + 1} days`; // Add 1 to account for current day
        }
      }
    }

    form.setFieldValue(field.name, { startDate, endDate, duration });

    // If you need to handle duration elsewhere
    // handleDuration(duration);
  };

  return (
      <DatePicker
        id={id}
        selectsRange={true}
        startDate={startDate}
        endDate={endDate}
        onChange={(update) => {
          if (Array.isArray(update) && update.every(date => date === null)) {
            setDateRange([null, null]);
            form.setFieldValue(field.name, null);
          } else {
            setDateRange(update);
            form.setFieldValue(field.name, { startDate: update[0], endDate: update[1], duration: '' });
          }
        }}
        
        placeholderText="Time Duration"
        onCalendarClose={calculateDaysOrMonths}
        isClearable={true}
        customInput={<Input 
          placeholder="Time Duration"
          style={{width: '100%'}}
          />}
      />
  );
};

export default DurationPicker;