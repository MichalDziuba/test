import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloudyIcon } from "../../Icons/cloudy-svg";
import styles from "./cityToday.module.css";

export const CityToday = () => {
 const currentTemp = useSelector((state) => state.weather.currentTemp);
 const minTemp = useSelector((state) => state.weather.minTemp);
 const maxTemp = useSelector((state) => state.weather.maxTemp)
const cityName=useSelector(state=>state.weather.cityName)
const country = useSelector((state) => state.weather.country);
  return (
    <div className={styles.cityToday__wrapper}>
      <div className={styles.cityToday__icon}>
        <CloudyIcon />
      </div>
      <div className={styles.cityToday__info}>
        <span className={styles.cityToday__city} >{cityName}, {country}</span>
        <span className={styles.cityToday__temp}> {currentTemp}</span>
      </div>

      <div className={styles.cityToday__temperatures}>
        <div className={styles.cityToday__temperatures_wrapper}>
          <span className={styles.cityToday__temperature_info}>min</span>
          <span className={styles.cityToday__temperature_data}>{minTemp}</span>
        </div>
        <div className={styles.cityToday__temperatures_wrapper}>
          <span className={styles.cityToday__temperature_info}>max</span>
          <span className={styles.cityToday__temperature_data}>{maxTemp}</span>
        </div>
      </div>
    </div>
  );
};
