import styles from './buttons.module.css';
import React from "react";
export const Buttons = () => {
    return (
        <div className={styles.buttons__wrapper}>
            <button type="button" className={styles.button}>TODAY</button>
            <button type="button"className={styles.button}>5 DAYS</button>
        </div>
    )
}