import React, { useState, useEffect } from "react";
import styles from "../styles/Grid.module.css";

export const Grid = (props) => {
  const width = props.width;
  const height = props.height;

  useEffect(() => {
    console.log(width, height);
  }, [width, height]);

  let gridSVG = (
    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern
          id="smallGrid"
          width="15"
          height="15"
          patternUnits="userSpaceOnUse">
          <path
            d="M 15 0 L 0 0 0 15"
            fill="none"
            stroke="gray"
            strokeWidth="0.5"
          />
        </pattern>
      </defs>
      <rect
        x="0"
        y="0"
        width={width / 2}
        height={height / 2}
        stroke="none"
        strokeWidth="0"
        fillOpacity="1"
        strokeOpacity="1"
        strokeDasharray="1"
        fill="whitesmoke"
      />
      <rect width="100%" height="100%" fill="url(#smallGrid)" />
    </svg>
  );

  return <div className={styles.mainContainer}>{gridSVG}</div>;
};
