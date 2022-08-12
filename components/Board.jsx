import React, { useState, useEffect } from "react";
import styles from "../styles/Board.module.css";

export const Board = () => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [cell, setCell] = useState(null);
  const [cascadingTextData, setCascadingTextData] = useState()


  useEffect(() => {
    getInitialBoardPositions(0,500);
    return () => {
      getInitialBoardPositions(0,0)
    }
  });

   // MOCK
  const cascadingTextata = [
    'string 1',
    'string 2',
    'string 3',
  ]

  const getInitialBoardPositions = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    // get random X, Y positions
    let x = Math.floor(Math.random() * (max - min) + min);
    let y = Math.floor(Math.random() * (max - min) + min);
    // round positin to 10
    setPositionX(`${Math.ceil((x * 10) / 10)}px`);
    setPositionY(`${Math.ceil((y * 10) / 10)}px`);

    if (positionX && positionY) {
      let cell = (
      <rect
        x={positionX}
        y={positionY}
        width="10"
        height="10"
        fillOpacity="1"
        strokeDasharray="1"
        fill="whitesmoke"
      />
    );
    setCell(cell)
    }
  };

  let gridSVG = (
    <svg width="500" height="500" xmlns="http://www.w3.org/2000/svg">
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
