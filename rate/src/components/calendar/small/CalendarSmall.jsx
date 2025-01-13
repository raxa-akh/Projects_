import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./style/calendar.css";
import Button from "../../ui/button/Button";

function CalendarView() {
  const [selectedDates, setSelectedDates] = useState([null, null]);
  const [isFirstDatePicked, setIsFirstDatePicked] = useState(false);

  const handleDateClick = (value) => {
    if (!isFirstDatePicked) {
      setSelectedDates([value, null]);
      setIsFirstDatePicked(true);
    } else {
      if (value > selectedDates[0]) {
        setSelectedDates([selectedDates[0], value]);
      } else {
        setSelectedDates([value, selectedDates[0]]);
      }
      setIsFirstDatePicked(false);
    }
  };
  const formatDate = (date) => {
    return (
      date &&
      date.toLocaleDateString("ru-RU", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  };
  const formattedSelectedDates = selectedDates
    .filter((date) => date !== null)
    .map((date) => formatDate(date))
    .join(" - ");

  const firstDateRussian = formatDate(selectedDates[0]);
  const secondDateRussian = formatDate(selectedDates[1]);

  console.log(firstDateRussian);
  console.log(secondDateRussian);
  return (
    <div className="calendar-content">
      <div className="inputs-header">
        <input
          readOnly
          type="text"
          value={firstDateRussian}
          className="input-header"
        />
        <div style={{ height: "22px" }}>―</div>

        <input
          readOnly
          type="text"
          value={secondDateRussian}
          className="input-header"
        />
      </div>
      <div>
        <Calendar selectRange onClickDay={handleDateClick} />
      </div>
      <div className="btn-calendars">
        <Button
          border="1px solid var(--gray-300, #d0d5dd)"
          padding="12px 45px"
          fontSize="16px"
          type="button"
          backgroundColor="white"
        >
          Отменить
        </Button>
        <Button
          backgroundColor="rgba(68, 76, 231, 1)"
          color="rgba(255, 255, 255, 1)"
          border="1px solid  #444CE7"
          padding="12px 20px"
          fontSize="16px"
          type="button"
          marginLeft="10px"
        >
          Подтвердить
        </Button>
      </div>
      {/* <div className="input-select-dates">
        <img src="calendar.svg" alt="calendar-icon" className="calendar-icon" />
        <input
          type="text"
          value={formattedSelectedDates}
          readOnly
          className="input-dates"
        />
      </div> */}
    </div>
  );
}

export default CalendarView;
