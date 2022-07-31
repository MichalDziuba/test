import { useEffect, useState } from "react";
import React from "react";
import { day, dayName, month, suffix } from "../../Features/Date/data";
import { SunriseIcon } from "../../Icons/sunrise-svg";
import { SunsetIcon } from "../../Icons/sunset-svg";
import styles from "./todayinfo.module.css";
import { useSelector } from "react-redux";

export const TodayInfo = () => {
  const [currentTime, setTime] = useState(new Date().toLocaleTimeString());
  const sunrise = useSelector((state) => state.weather.sunrise);
  const sunset = useSelector((state) => state.weather.sunset);

  useEffect(() => {
    const timer = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => {
      clearInterval(timer);
    };
  });

  return (
    <div className={styles.todayInfo__wrapper}>
      <div className={styles.todayInfo__date}>
        <div className={styles.todayInfo__day_wrapper}>
          <span className={styles.todayInfo__day}>{day}</span>
          <span className={styles.todayInfo__suffix}>{suffix()}</span>
        </div>

        <span className={styles.todayInfo__dayName}>{dayName}</span>
      </div>
      <div className={styles.todayInfo__time}>
        <div>{month}</div>
        <div>{currentTime}</div>
        <div>
          <SunriseIcon className={styles.icon_sun} />
          <span>{sunrise}</span>
        </div>{" "}
        <div>
          <SunsetIcon className={styles.icon_sun} />
          <span>{sunset}</span>
        </div>{" "}
      </div>
    </div>
  );
};
