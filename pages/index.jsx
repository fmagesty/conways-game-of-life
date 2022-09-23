import React, { useState, useEffect } from "react"
import styles from "../styles/Home.module.css"
import { rulesText } from "../data/rulesText.module.js"
import { Board } from "../components/Board"

export default function Home() {
	return (
		<>
			<div className={styles.mainContainer}>
				<h1 className={styles.title}>-- Conway&apos;s Game of Life app --</h1>
				<span>v1</span>
				<div className={styles.rulesTextContainer}>{rulesText}</div>
				<Board />
			</div>
		</>
	)
}
