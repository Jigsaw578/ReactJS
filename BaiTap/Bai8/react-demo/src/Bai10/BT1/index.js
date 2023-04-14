import React from "react";
import styles from './styles.module.css'

export default function B10BT1() {
    return (
        <div className={styles.container}>
            <div className={styles.sidebar}>
                <p>Left Side</p>
            </div>
            <div className={styles.content}>
                <p>Right Side</p>
            </div>
        </div>
    )
}