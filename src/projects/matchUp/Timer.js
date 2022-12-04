import React, { useState, useRef } from "react";
import "./matchUp.css";

const Timer = ({ revealedGrid }) => {
	const [timer, setTimer] = useState("00:00:30");
	const timerRef = useRef(null); // keeps track of setInterval and stops it when needed

	const getTimeRemaining = (e) => {
		const total = Date.parse(e) - Date.parse(new Date());
		const seconds = Math.floor((total / 1000) % 60);
		return {
			total,
			seconds,
		};
	};

	const startTimer = (e) => {
		let { total, seconds } = getTimeRemaining(e);
		if (0 <= total) {
			setTimer("00:00:" + (seconds > 9 ? seconds : "0" + seconds));
		}
	};

	const clearTimer = (e) => {
		setTimer("00:00:30");

		if (timerRef.current) clearInterval(timerRef.current);

		const id = setInterval(() => {
			startTimer(e);
		}, 1000);

		timerRef.current = id;
	};

	const getDeadTime = () => {
		let deadline = new Date();

		deadline.setSeconds(deadline.getSeconds() + 30);

		return deadline;
	};

	return (
		<div className="App">
			<h3 className="timer-countdown">{timer}</h3>
			<button onClick={() => clearTimer(getDeadTime())} className="timer-btn">
				Begin Countdown
			</button>
		</div>
	);
};

export default Timer;
