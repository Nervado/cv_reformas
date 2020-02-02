/* eslint-disable no-nested-ternary */
/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import { FaRegCalendarCheck, FaRegCalendar } from 'react-icons/fa';
import PropTypes from 'prop-types';
import { getDaysInMonth } from 'date-fns';

import {
  Container,
  Header,
  Title,
  List,
  StyledButton,
  HeaderCalendar,
} from './styles';

export default function SimpleDatePicker({ list, placeholderText }) {
  const [selected, setSelected] = useState('');
  const [visible, setVisible] = useState(false);

  const [date, setDate] = useState(new Date());

  const [daysrange, setDaysrange] = useState([]);

  const daysInMounth = getDaysInMonth(new Date());

  const WEEK_DAYS = {
    Sunday: 'S',
    Monday: 'T',
    Tuesday: 'Q',
    Wednesday: 'Q',
    Thursday: 'S',
    Friday: 'S',
    Saturday: 'D',
  };

  const CALENDAR_MONTHS = {
    January: 'Jan',
    February: 'Fev',
    March: 'Mar',
    April: 'Abr',
    May: 'Mai',
    June: 'Jun',
    July: 'Jul',
    August: 'Ago',
    September: 'Set',
    October: 'Out',
    November: 'Nov',
    December: 'Dez',
  };

  const CALENDAR_WEEKS = 6;

  const zeroPad = (value, length) => {
    return `${value}`.padStart(length, '0');
  };

  const DAYS = 31;

  useEffect(() => {
    let index = 0;
    const days = [];
    while (index < daysInMounth) {
      days.push(index + 1);
      index += 1;
    }
    setDaysrange([...days]);

    console.log(days);
  }, [daysInMounth]);

  return (
    <Container>
      <Header>
        <Title onClick={() => setVisible(!visible)} selected={selected}>
          <span>{selected.length ? selected : placeholderText}</span>
          <span style={{ color: '#df7e38' }}>
            {selected.length ? <FaRegCalendarCheck /> : <FaRegCalendar />}
          </span>
        </Title>
      </Header>
      <List visible={visible} onMouseLeave={() => setVisible(false)}>
        <HeaderCalendar />
        {daysrange.map(item => {
          return (
            <div className="day" key={item.toString()}>
              <StyledButton
                type="StyledButton"
                onClick={() => {
                  setSelected(item.toString());
                  setVisible(false);
                }}
              >
                {item}
              </StyledButton>
            </div>
          );
        })}
      </List>
    </Container>
  );
}

SimpleDatePicker.propTypes = {
  list: PropTypes.array,
  placeholderText: PropTypes.string,
};

SimpleDatePicker.defaultProps = {
  list: [],
  placeholderText: '',
};
