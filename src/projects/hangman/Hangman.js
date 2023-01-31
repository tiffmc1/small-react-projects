import { useState } from "react";
import "./hangman.css";

const alphabet = [
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"h",
	"i",
	"j",
	"k",
	"l",
	"m",
	"n",
	"o",
	"p",
	"q",
	"r",
	"s",
	"t",
	"u",
	"v",
	"w",
	"x",
	"y",
	"z",
];

let dummyWord = "einstein";
let dummyWordArr = dummyWord.split("");
const underscore = " _____ ";

const Hangman = () => {
	const [dummy, setDummy] = useState([
		{ letter: "e", correctlyGuessed: false },
		{ letter: "i", correctlyGuessed: false },
		{ letter: "n", correctlyGuessed: false },
		{ letter: "s", correctlyGuessed: false },
		{ letter: "t", correctlyGuessed: false },
		{ letter: "e", correctlyGuessed: false },
		{ letter: "i", correctlyGuessed: false },
		{ letter: "n", correctlyGuessed: false },
	]);
	const [chances, setChances] = useState(10);
	const [incorrectGuesses, setIncorrectGuesses] = useState([]);
	const [disablePageClick, setDisablePageClick] = useState(false);

	const handleLetterGuess = (guessedLetter) => {
		// setting correctly guessed letters to state
		let copyDummy = [...dummy];
		copyDummy.map((char) =>
			guessedLetter === char.letter ? (char.correctlyGuessed = true) : null
		);
		setDummy(copyDummy);

		// incorrect guesses/decrease chances
		let isIncorrectGuess = !dummyWordArr.includes(guessedLetter);
		if (isIncorrectGuess) {
			setChances(chances - 1);
			setIncorrectGuesses((prevGuesses) => [...prevGuesses, guessedLetter]);

			if (chances <= 0) {
				setDisablePageClick(true);
				setTimeout(() => {
					alert("You lose");
				}, 1000);
			}
		}

		// winner!
		if (dummy.every((letter) => letter.correctlyGuessed === true)) {
			setDisablePageClick(true);
			setTimeout(() => {
				alert("congrats you won! Click the Play Again button to restart");
			}, 1000);
		}
	};

	const handlePlayAgain = () => {
		setDisablePageClick(false);
	};

	return (
		<div>
			<div className={disablePageClick ? "no-click" : null}>
				<div>Hangman</div>

				<div className="hangman-alphabet">
					{alphabet.map((letter, i) => (
						<button
							key={i}
							onClick={() => handleLetterGuess(letter)}
							className="hangman-letter"
						>
							{letter}
						</button>
					))}
				</div>

				<div className="hangman-category">
					The category is famous scientists
				</div>

				<div className="hangman-underscores">
					{dummy.map((char, i) => (
						<div key={i} className="hangman-underscore">
							{char.correctlyGuessed ? char.letter : underscore}
						</div>
					))}
				</div>

				<div>Chances: {chances}</div>
				<div>Incorrect Guesses: {incorrectGuesses.join(", ")}</div>

				<img
					src={require("./images/hangman-9.png")}
					alt=""
					height={350}
					width={250}
				/>
			</div>
			<button onClick={handlePlayAgain}>Play Again</button>
		</div>
	);
};

export default Hangman;
