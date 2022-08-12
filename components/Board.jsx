import React, { useState, useEffect } from "react";
import styles from "../styles/Board.module.css";

export const Board = () => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [displayedCells, setDisplayedCells] = useState(null);
  // const [cascadingTextData, setCascadingTextData] = useState();

  useEffect(() => {
    getInitialBoardPositions(0, 500);
    generateCells();
    return () => {
      getInitialBoardPositions(0, 0);
    };
  }, []);

  // Mock - TODO: copy this to /utils/data
  // const cascadingTextata = ["string 1", "string 2", "string 3"];



  const generateCells = () => {
    const cellGroup = [
    { id: 0, xPosition: 55, yPosition: 10, color: "yellow" },
    { id: 1, xPosition: 155, yPosition: 100, color: "white" },
  ];
    const populateCellGroup = cellGroup.map((item) => {
      console.log(item);
    });
    return populateCellGroup;
  };

  // for (let i = 0; i < range; i++) {
  //     console.log(i);
  //   }

  const getInitialBoardPositions = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    let x = Math.floor(Math.random() * (max - min) + min);
    let y = Math.floor(Math.random() * (max - min) + min);
    setPositionX(`${Math.ceil((x * 10) / 10)}px`);
    setPositionY(`${Math.ceil((y * 10) / 10)}px`);

    // MOVE THIS OUT - ITS GENERATING THE CELL SVG
    if (positionX && positionY) {
      let cellSvg = (
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
      setDisplayedCells(cellSvg);
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
      {displayedCells}
      {/* TODO ON THE FUTURE: MAKE THIS BLINK IN GREEN EVERY SECOND OR SO. IS POSSIBLE MAKE IT A SMOOTH ANIMATION AND NOT LIKE AN EPILEPSY-INDUCING THING IDK THE WORD */}
      <rect width="100%" height="100%" fill="url(#smallGrid)" />
    </svg>
  );

  return <div className={styles.mainContainer}>{gridSVG}</div>;
};
