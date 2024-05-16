import React from "react";
import styles from "../styles/ResetButton.module.css";

export const ResetButton = ({ setCurrentRound }) => {
    const handleReset = () => {
        setCurrentRound(0);
    };

    return (
        <button className={styles.resetButton} onClick={handleReset}>
            Reset
        </button>
    );
};
