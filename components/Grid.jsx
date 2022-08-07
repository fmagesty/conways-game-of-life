import React, { useState, useEffect } from "react";
import styles from "../styles/Grid.module.css";

export const Grid = () => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  useEffect(() => {
    drawInitialBoard(1, 99);

  }, []);

  const drawInitialBoard = (min, max) => {
    // Generate random int for cell positioning
    min = Math.ceil(min);
    max = Math.floor(max);
    //The maximum is exclusive and the minimum is inclusive
    let xPositionRandomInt = Math.floor(Math.random() * (max - min) + min);
    setPositionX(`${xPositionRandomInt}px`);
    let yPxPositionRandomInt = Math.floor(Math.random() * (max - min) + min);
    setPositionY(`${yPxPositionRandomInt}px`);
  };

  const cell = (
    <rect
      // x="10"
      x={positionX}
      // y="10"
      y={positionY}
      width="10"
      height="10"
      fillOpacity="1"
      strokeDasharray="1"
      fill="whitesmoke"
    />
  );

  let gridSVG = (
    <svg width="500px" height="500px" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="smallGrid"
          width="10"
          height="10"
          patternUnits="userSpaceOnUse">
          <path
            d="M 10 0 L 0 0 0 10"
            fill="none"
            stroke="gray"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      {cell}
      <rect width="100%" height="100%" fill="url(#smallGrid)" />
    </svg>
  );

  return <div className={styles.mainContainer}>{gridSVG}</div>;
};
