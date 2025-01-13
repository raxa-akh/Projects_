import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./style/bigCalendar.css";
import Button from "../../ui/button/Button";
function CalendarBig() {
  const [selectedFirstDate, setSelectedFirstDate] = useState(new Date());
  const [selectedSecondDate, setSelectedSecondDate] = useState(new Date());
  const [selectedType, setSelectedType] = useState(null);

  useEffect(() => {
    const newDate = new Date(selectedFirstDate);
    newDate.setMonth(newDate.getMonth() + 1);
    setSelectedSecondDate(newDate);
  }, [selectedFirstDate]);
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
  const handleFirstDateClick = (value) => {
    setSelectedFirstDate(value);
  };

  const handleSecondDateClick = (value) => {
    setSelectedSecondDate(value);
  };
  const handleButtonClick = (type) => {
    setSelectedType(type);
  };
  const firstDate = formatDate(selectedFirstDate);
  const secondaDate = formatDate(selectedSecondDate);
  return (
    <div className="calendars-container">
      <div className="calendars">
        <div className="select-date">
          <button
            className={selectedType === "overdue" ? "selected" : "type-date"}
            onClick={() => handleButtonClick("overdue")}
          >
            Просроченные
          </button>
          <button
            className={selectedType === "yesterday" ? "selected" : "type-date"}
            onClick={() => handleButtonClick("yesterday")}
          >
            Вчера
          </button>
          <button
            className={selectedType === "lastWeek" ? "selected" : "type-date"}
            onClick={() => handleButtonClick("lastWeek")}
          >
            Прошлая неделя
          </button>
          <button
            className={selectedType === "lastMonth" ? "selected" : "type-date"}
            onClick={() => handleButtonClick("lastMonth")}
          >
            Прошлый месяц
          </button>
          <button
            className={
              selectedType === "lastQuarter" ? "selected" : "type-date"
            }
            onClick={() => handleButtonClick("lastQuarter")}
          >
            Прошлый квартал
          </button>
          <button
            className={selectedType === "lastYear" ? "selected" : "type-date"}
            onClick={() => handleButtonClick("lastYear")}
          >
            Прошлый год
          </button>
          <button
            className={selectedType === "future" ? "selected" : "type-date"}
            onClick={() => handleButtonClick("future")}
          >
            Будущие
          </button>
          <button
            className={selectedType === "today" ? "selected" : "type-date"}
            onClick={() => handleButtonClick("today")}
          >
            Сегодня
          </button>
          <button
            className={selectedType === "thisWeek" ? "selected" : "type-date"}
            onClick={() => handleButtonClick("thisWeek")}
          >
            Эта неделя
          </button>
          <button
            className={selectedType === "thisMonth" ? "selected" : "type-date"}
            onClick={() => handleButtonClick("thisMonth")}
          >
            Этот месяц
          </button>
        </div>
        <div className="calendar-right">
          <Calendar
            onClickDay={handleFirstDateClick}
            value={selectedFirstDate}
          />
          <div className="inputs-date">
            <input
              readOnly
              type="text"
              value={firstDate}
              className="input-date"
            />
            <div style={{ height: "22px" }}>―</div>
            <input
              readOnly
              type="text"
              value={secondaDate}
              className="input-date"
            />
          </div>
        </div>
        <div className="calendar-left">
          <Calendar
            onClickDay={handleSecondDateClick}
            value={selectedSecondDate}
          />
          <div className="btn-calendars">
            <Button
              border="1px solid var(--gray-300, #d0d5dd)"
              padding="12px 20px"
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
        </div>
      </div>
    </div>
  );
}

export default CalendarBig;
