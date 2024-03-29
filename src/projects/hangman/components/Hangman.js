import { useState, useEffect } from "react";
import ChosenWordLetters from "./ChosenWordLetters";
import Images from "./Images";
import "../hangman.css";
import { alphabet, categoryData } from "../data";

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
		// randomly select a category & set to state
		let categoryDataKeys = Object.keys(categoryData).sort(() =>
			Math.floor(Math.random() - 0.5)
		);
		let chosenCategoryKey = categoryDataKeys[0];
		let categoryToSet = "";

		for (let char of chosenCategoryKey) {
			char === "_" ? (categoryToSet += " ") : (categoryToSet += char);
		}

		setChosenCategory(categoryToSet);

		// find the selected category, randomly select a value from that category, and set to state
		for (let key in categoryData) {
			if (key === chosenCategoryKey) {
				let categoryDataValues = categoryData[key].sort(() =>
					Math.floor(Math.random() - 0.5)
				);
				let chosenWordValue = categoryDataValues[0].split("");

				setChosenWordArr(chosenWordValue);

				// to include spaces, apostrophes, and semicolons in the selected value
				chosenWordValue.map((char) =>
					char === " " || char === "'" || char === ":"
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
					<div>
						The category is:{" "}
						{chosenCategory ? `${chosenCategory}` : "__________________"}
					</div>
					<div>Chances: {chances}</div>
				</div>

				<ChosenWordLetters chosenWordLetters={chosenWordLetters} />

				<Images chancesImg={chancesImg} />

				<div className="hangman-alphabet">
					{alphabet.map((letter, i) => (
						<button
							key={i}
							onClick={() => handleLetterGuess(letter)}
							className={
								incorrectGuesses.includes(letter)
									? "hangman-letter-wrong"
									: "hangman-letter"
							}
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
