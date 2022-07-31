import styles from './quote.module.css'
import React from 'react';
export const Quote = () => (
    <div className={styles.quote__wrapper}>
        <p className={styles.quote__text}>
          Who cares about the clouds when we're together? Just sing a song and bring the sunny weather.  
        </p>
        <p className={styles.quote__signature}>Dale Evans</p>
    </div>
)