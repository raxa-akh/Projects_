import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import style from "./style/filtCalendar.css";
import Button from "../../../ui/button/Button";
import { useRef } from "react";
function CalendarFilt({setSelectedDate, setCalendar}) {
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

  const dropdownRef = useRef(null)
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setCalendar(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const firstDate = formatDate(selectedFirstDate);
  const secondaDate = formatDate(selectedSecondDate);
  return (
    <div ref={dropdownRef} className="calendars-container">
      <div className="calendars">
        <div className="select-date">
          <div className="select-date-left">
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
          </div>
          <div className="select-date-right">
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
            <button
              className={selectedType === "thisQuarter" ? "selected" : "type-date"}
              onClick={() => handleButtonClick("thisQuarter")}
            >
              Этот квартал
            </button>
            <button
              className={selectedType === "thisYear" ? "selected" : "type-date"}
              onClick={() => handleButtonClick("thisYear")}
            >
              Этот год
            </button>
          </div>
        </div>
        <div className="calendar_and_btn">
          <div className="calendars-cont">
            <div className="calendar-right">
              <Calendar
                onClickDay={handleFirstDateClick}
                value={selectedFirstDate}
              />
            </div>
            <div className="inputs-date">
                <input
                  readOnly
                  type="text"
                  value={firstDate}
                  className="input-date"
                />
                <div className="input-date-divider">―</div>
                <input
                  readOnly
                  type="text"
                  value={secondaDate}
                  className="input-date"
                />
              </div>
          </div>
          <div className="button-cont">
            <div className="calendar-left">
              <Calendar
                onClickDay={handleSecondDateClick}
                value={selectedSecondDate}
              />
            </div>
            <div className="btn-calendars">
              <Button
                backgroundColor="#fff"
                borderRadius='8px'
                color="#344054"
                border="1px solid  #D0D5DD"
                padding="6px 10px"
                fontSize="16px"
                type="button"
                marginLeft="10px"
                onClick={()=>setCalendar(false)}
              >
                Отменить
              </Button>
              <Button
                backgroundColor="rgba(68, 76, 231, 1)"
                borderRadius='8px'
                color="rgba(255, 255, 255, 1)"
                border="1px solid  #444CE7"
                padding="6px 10px"
                fontSize="16px"
                type="button"
                marginLeft="10px"
                onClick={() => {setSelectedDate(`С ${firstDate} по ${secondaDate}`); setCalendar(false)}}
              >
                Подтвердить
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalendarFilt;
