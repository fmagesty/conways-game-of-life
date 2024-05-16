import React, { useState, useEffect } from "react";
import styles from "../styles/Board.module.css";

export const Board = () => {
	const [currentRound, setCurrentRound] = useState(0);
	const [cells, setCells] = useState([]);

	const calculateNextGeneration = (currentCells) => {
		const nextCells = currentCells.map((cell) => {
			const { x, y, isAlive } = cell;
			const neighbors = currentCells.filter(
				(neighbor) =>
					Math.abs(neighbor.x - x) <= 1 &&
					Math.abs(neighbor.y - y) <= 1 &&
					!(neighbor.x === x && neighbor.y === y)
			);
			const liveNeighbors = neighbors.filter((neighbor) => neighbor.isAlive).length;
			if (isAlive && (liveNeighbors === 2 || liveNeighbors === 3)) {
				return { x, y, isAlive: true };
			} else if (!isAlive && liveNeighbors === 3) {
				return { x, y, isAlive: true };
			} else {
				return { x, y, isAlive: false };
			}
		});
		return nextCells;
	};

	useEffect(() => {
		// Set up the initial cells when the component mounts
		const initialCells = [];
		const boardSize = 50;
		for (let x = 0; x < boardSize; x++) {
			for (let y = 0; y < boardSize; y++) {
				initialCells.push({ x, y, isAlive: false });
			}
		}
		// Randomly assign some cells as alive
		for (let i = 0; i < boardSize * boardSize * 0.5; i++) {
			const randomIndex = Math.floor(Math.random() * initialCells.length);
			initialCells[randomIndex].isAlive = true;
		}
		setCells(initialCells);
		// Start the round countdown
		const roundCountdown = setInterval(() => {
			setCurrentRound((currentRound) => currentRound + 1);
		}, 1000);
		// Clean up the interval when the component unmounts
		return () => clearInterval(roundCountdown);
	}, []);

	useEffect(() => {
		if (cells.length > 0) {
			// Calculate the next generation of cells
			setCells((currentCells) => calculateNextGeneration(currentCells));
		}
	}, [currentRound]);

	return (
		<div className={styles.mainContainer}>
			<p className={styles.currentRoundCounter}>Round: {currentRound}</p>
			<svg className={styles.boardSvg} width="500" height="500" xmlns="http://www.w3.org/2000/svg">
				{cells.map((cell) => (
					<rect
						key={`${cell.x},${cell.y}`}
						x={cell.x * 10}
						y={cell.y * 10}
						width="10"
						height="10"
						fill={cell.isAlive ? "green" : "black"}
					/>
				))}
			</svg>
		</div>
	);
};
