import React, { useState, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { rulesText } from "../data/rulesText.module.js";
import { Grid } from "../components/Grid";

export default function Home() {
  const [currentRound, setCurrentRound] = useState(0);
  const width = 100;
  const height = 100;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRound((currentRound) => currentRound + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [currentRound]);

  return (
    <>
      <div className={styles.mainContainer}>
        <h1 className={styles.title}>-- Conway&apos;s Game of Life app --</h1>
        <span>v1</span>
        <div className={styles.rulesTextContainer}>{rulesText}</div>
        <p className={styles.currentRoundCounter}>Round: {currentRound}</p>
        <Grid width={width} height={height} />
      </div>
    </>
  );
}
