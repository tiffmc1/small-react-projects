import { useState, useEffect } from "react";
import "./hangman.css";
import { underscore, alphabet, categoryData } from "./data";

const Hangman = () => {
	const [chosenCategory, setChosenCategory] = useState("");
	const [chosenWordArr, setChosenWordArr] = useState([]);
	const [chosenWordLetters, setChosenWordLetters] = useState([]);
	const [chances, setChances] = useState(10);
	const [chancesImg, setChancesImg] = useState(0);
	const [incorrectGuesses, setIncorrectGuesses] = useState([]);
	const [disablePageClick, setDisablePageClick] = useState(true);

	useEffect(() => {
		// loser
		if (chances < 1) {
			setDisablePageClick(true);
			setTimeout(() => {
				alert("You lose. Start a new game!");
			}, 1000);
		}

		// winner!
		if (
			chosenWordLetters.length > 0 &&
			chosenWordLetters.every((letter) => letter.correctlyGuessed === true)
		) {
			setDisablePageClick(true);
			setTimeout(() => {
				alert("Congrats! You won! Start a new game.");
			}, 1000);
		}
	}, [chances, chosenWordLetters]);

	const generateRandomWord = () => {
		let categoryDataKeys = Object.keys(categoryData).sort(() =>
			Math.floor(Math.random() - 0.5)
		);
		let chosenCategoryKey = categoryDataKeys[0];

		setChosenCategory(chosenCategoryKey);

		for (let key in categoryData) {
			if (key === chosenCategoryKey) {
				let categoryDataValues = categoryData[key].sort(() =>
					Math.floor(Math.random() - 0.5)
				);
				let chosenWordValue = categoryDataValues[0].split("");

				setChosenWordArr(chosenWordValue);

				chosenWordValue.map((char) =>
					char === " "
						? setChosenWordLetters((prevChars) => [
								...prevChars,
								{ letter: char, correctlyGuessed: true },
						  ])
						: setChosenWordLetters((prevChars) => [
								...prevChars,
								{ letter: char, correctlyGuessed: false },
						  ])
				);
			}
		}
	};

	const handleLetterGuess = (guessedLetter) => {
		// setting correctly guessed letters to state
		let copyChosenWordLetters = [...chosenWordLetters];

		copyChosenWordLetters.map((char) =>
			guessedLetter === char.letter ? (char.correctlyGuessed = true) : null
		);

		setChosenWordLetters(copyChosenWordLetters);

		// incorrect guess/decrease chances
		let isIncorrectGuess = !chosenWordArr.includes(guessedLetter);

		if (isIncorrectGuess) {
			setChances(chances - 1);
			setChancesImg(chancesImg + 1);
			setIncorrectGuesses((prevGuesses) => [...prevGuesses, guessedLetter]);
		}
	};

	const handleNewGame = () => {
		setChosenWordLetters([]);
		setIncorrectGuesses([]);
		setChances(10);
		setChancesImg(0);

		generateRandomWord();
		setDisablePageClick(false);
	};

	return (
		<div className="hangman-container">
			<div className="hangman-title">Hangman</div>

			<button onClick={handleNewGame} className="hangman-btn">
				New Game
			</button>

			<div className={disablePageClick ? "no-click" : null}>
				<div className="hangman-category">
					The category is: {chosenCategory ? `${chosenCategory}` : "N/A"}
				</div>

				<div className="hangman-underscores">
					{chosenWordLetters.map((char, i) => (
						<div key={i} className="hangman-underscore">
							{char.correctlyGuessed ? char.letter : underscore}
						</div>
					))}
				</div>

				<div className="hangman-img-wrapper">
					<div className="hangman-img">
						{chancesImg ? (
							<img
								src={require(`./images/hangman-${chancesImg}.png`)}
								alt=""
								height={350}
								width={250}
							/>
						) : (
							<img
								src={require("./images/hangman-0.png")}
								alt=""
								height={350}
								width={250}
							/>
						)}
						<div className="hangman-chances">
							<div>Chances: {chances}</div>
							<div>Incorrect Guesses:</div>
							<div>{incorrectGuesses.join(", ")}</div>
						</div>
					</div>
				</div>

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
			</div>
		</div>
	);
};

export default Hangman;
