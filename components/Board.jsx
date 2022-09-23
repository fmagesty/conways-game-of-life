import React, { useState, useEffect } from "react"
import styles from "../styles/Board.module.css"

export const Board = () => {
	const [currentRound, setCurrentRound] = useState(0)
	let cellPosArr = []
	const [initialCells, setInitialCells] = useState(null)

	useEffect(() => {
		const roundCountdown = setInterval(() => {
			setCurrentRound((currentRound) => currentRound + 1)
		}, 1000)
		getInitialBoardPositions(0, 500, 20)
		displayInitialCells()
		return () => clearInterval(roundCountdown)
	}, [])

	const getInitialBoardPositions = (min, max, initialCellsNum) => {
		for (let i = 0; i < initialCellsNum; i++) {
			min = Math.ceil(min)
			max = Math.floor(max)
			let x = `${Math.floor(Math.random() * (max - min) + min)}`
			let y = `${Math.floor(Math.random() * (max - min) + min)}`
			let cellPositions = { x: x, y: y }
			cellPosArr.push(cellPositions)
		}
	}

	const displayInitialCells = () => {
		setInitialCells(
			cellPosArr &&
				cellPosArr.map((item) => (
					<rect
						key={item.x + item.y}
						x={Math.ceil(item.x / 10) * 10}
						y={Math.ceil(item.y / 10) * 10}
						width="10"
						height="10"
						fillOpacity="1"
						strokeDasharray="1"
						fill="rgb(0, 200, 0)"
					/>
				))
		)
	}

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
			{initialCells}
			<rect width="100%" height="100%" fill="url(#smallGrid)" />
		</svg>
	)
	return (
		<>
			<p className={styles.currentRoundCounter}>Round: {currentRound}</p>
			<div className={styles.mainContainer}>{gridSVG}</div>
		</>
	)
}
