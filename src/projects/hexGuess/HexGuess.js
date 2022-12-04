import { useState, useEffect } from "react";
import "../hexGuess/hexGuess.css";

const generateRandomColor = () => {
	const red = parseInt(Math.random() * 255);
	const green = parseInt(Math.random() * 255);
	const blue = parseInt(Math.random() * 255);

	return `#${red.toString(16).toUpperCase()}${green
		.toString(16)
		.toUpperCase()}${blue.toString(16).toUpperCase()}`;
};

function HexGuess() {
	const [color, setColor] = useState("");
	const [colors, setColors] = useState([]);
	const [isWrong, setIsWrong] = useState(null);

	const generateColors = () => {
		const displayedColor = generateRandomColor();
		const wrongColor1 = generateRandomColor();
		const wrongColor2 = generateRandomColor();

		setColor(displayedColor);
		setColors(
			[displayedColor, wrongColor1, wrongColor2].sort(() => Math.random() - 0.5)
		);
	};

	useEffect(() => {
		generateColors();
	}, []);

	const handleAnswer = (guessedColor) => {
		if (guessedColor === color) {
			setIsWrong(false);
			generateColors();
		} else setIsWrong(true);
	};

	return (
		<>
			<div className="hex-wrapper">
				<h1 className="hex-header">Hex-Guess Game</h1>
				<div className="hex-desc">
					Pick the correct hex matching the color block below
				</div>
				<div className="hex-color" style={{ background: color }} />

				<div className="hex-btn-wrapper">
					{colors.map((singleColor) => (
						<div key={singleColor}>
							<button
								className="hex-btn"
								onClick={() => handleAnswer(singleColor)}
							>
								{singleColor}
							</button>
						</div>
					))}
				</div>

				<div className="hex-answer-wrapper">
					{isWrong === false ? (
						<div className="hex-correct">Correct!</div>
					) : null}
					{isWrong === true ? <div className="hex-wrong">Wrong!</div> : null}
				</div>
			</div>
		</>
	);
}

export default HexGuess;
