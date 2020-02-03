import React, { useState, useEffect } from 'react';
import {
  FaRegCalendarCheck,
  FaRegCalendar,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa';
import PropTypes from 'prop-types';
import {
  getDaysInMonth,
  getYear,
  getMonth,
  getDay,
  getDate,
  setDate,
  addMonths,
  subMonths,
  subDays,
  addDays,
  isSameDay,
} from 'date-fns';

import {
  Container,
  Header,
  Title,
  List,
  StyledButton,
  HeaderCalendar,
  HeaderBody,
} from './styles';

export default function SimpleDatePicker({ placeholderText }) {
  const [visible, setVisible] = useState(false);

  const [date, setNewDate] = useState(new Date());

  const [selectedDate, setSelectedDate] = useState(new Date());

  const [daysrange, setDaysrange] = useState([]);

  const today = new Date();

  const weekDays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];

  const months = [
    'Janeiro',
    'Fev',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
  ];

  function handlePrevMounth() {
    setNewDate(subMonths(date, 1));
  }

  function handleNextMounth() {
    setNewDate(addMonths(date, 1));
  }

  useEffect(() => {
    let index = 0;
    const days = [];
    let offset;

    const initialDate = setDate(date, 1);
    console.tron.log(initialDate);

    // Recupera o dia da semana
    offset = getDay(initialDate);

    // varia de 0 até 6
    if (offset === 0) offset = 6;
    if (offset >= 1 && offset <= 6) offset -= 1;

    while (index < offset) {
      days.push(subDays(initialDate, 6 - index));
      index += 1;
    }

    console.tron.log(days);
    index = 0;
    const daysInMounth = getDaysInMonth(initialDate);

    while (index < daysInMounth) {
      days.push(addDays(initialDate, index));
      index += 1;
    }

    setDaysrange([...days]);

    // console.tron.log(days);
  }, [date]);

  return (
    <Container>
      <Header>
        <Title
          onClick={() => setVisible(!visible)}
          selected={selectedDate > today ? 1 : 0}
        >
          <span>
            {selectedDate > today
              ? getDate(selectedDate).toString()
              : placeholderText}
          </span>
          <span style={{ color: '#df7e38' }}>
            {selectedDate > today ? <FaRegCalendarCheck /> : <FaRegCalendar />}
          </span>
        </Title>
      </Header>
      <List visible={visible} onMouseLeave={() => setVisible(false)}>
        <HeaderCalendar>
          <div className="year-wrapper">
            <FaChevronLeft
              className="icon"
              size={12}
              style={{ color: '#fff' }}
              onClick={handlePrevMounth}
            />
            <div className="year">
              {months[getMonth(date)]}
              <span> de </span>
              {getYear(date)}
            </div>
            <FaChevronRight
              className="icon"
              size={12}
              style={{ color: '#fff' }}
              onClick={handleNextMounth}
            />
          </div>
          <div className="week-days">
            {weekDays.map(weekday => {
              return (
                <div key={weekday.toString()} className="day-header">
                  {weekday.toString()}
                </div>
              );
            })}
          </div>
        </HeaderCalendar>
        <HeaderBody>
          {daysrange.map(item => {
            return (
              <div className="day" key={item.toString()}>
                <StyledButton
                  disabled={
                    !(item > today) || getMonth(item) !== getMonth(date)
                  }
                  selected={isSameDay(item, selectedDate) ? 1 : 0}
                  onClick={() => {
                    setVisible(false);
                    setSelectedDate(item);
                  }}
                >
                  {getMonth(item) !== getMonth(date) ? ' ' : getDate(item)}
                </StyledButton>
              </div>
            );
          })}
        </HeaderBody>
      </List>
    </Container>
  );
}

SimpleDatePicker.propTypes = {
  placeholderText: PropTypes.string,
};

SimpleDatePicker.defaultProps = {
  placeholderText: '',
};
