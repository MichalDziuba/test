import { LocationIcon } from "../../Icons/location-svg";
import { StarIcon } from "../../Icons/star-svg";
import styles from "./searching.module.css";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCity, asyncFetchData, select } from "../../Redux/reducers";
import { nanoid } from "@reduxjs/toolkit";
import { fetchData } from "../../Features/API/api";

export const Searching = () => {

  const dispatch = useDispatch();
  const cities = useSelector((state) => state.weather.cities);


  const inputHandler = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const input = form.elements.city.value;
    // dispatch(addCity(input))
    dispatch(asyncFetchData(input));
    form.reset();
    
  };

  return (
    <div className={styles.searching__wrapper}>
      <form className={styles.searching__from} onSubmit={inputHandler}>
        <input
          name="city"
          type="text"
          placeholder="Enter the city"
          className={styles.searching__input}
        />
        <button
          className={`${styles.searching__button} ${styles.searching__button__location}`}
        >
          <LocationIcon className={styles.icon} />
        </button>
        <button
          className={`${styles.searching__button} ${styles.searching__button__star}`}
        >
          <StarIcon className={styles.icon} />
        </button>
      </form>

      {cities.length > 0 && (
        <ul>
          {cities.map((city) => (
            <li key={nanoid()}>{city}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
