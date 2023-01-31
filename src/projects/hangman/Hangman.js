import { useState, useEffect } from "react";
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

const dummyData = {
	automobiles: [
		"volkswagen scirocco",
		"koenigsegg gemera",
		"lamborghini murcielago",
		"maserati quattroporte",
		"ssangyong tivoli",
		"pagani huayara",
		"porsche cayenne",
		"ferrari testarossa",
		"chevrolet corvette stingray",
		"ford mustang shelby",
	],
	scientists: [
		"albert einstein",
		"nikola tesla",
		"charles darwin",
		"thomas edison",
		"marie curie",
		"stephen hawking",
		"george washington carver",
		"alexander graham bell",
		"archimedes",
		"louis pasteur",
	],
};

const underscore = " _____ ";

const Hangman = () => {
	const [chosenCategory, setChosenCategory] = useState("");
	const [chosenWordArr, setChosenWordArr] = useState([]);
	const [dummy, setDummy] = useState([]);
	const [chances, setChances] = useState(10);
	const [incorrectGuesses, setIncorrectGuesses] = useState([]);
	const [disablePageClick, setDisablePageClick] = useState(false);

	useEffect(() => {
		// loser
		if (chances < 1) {
			setDisablePageClick(true);
			setTimeout(() => {
				alert("You lose. Click the button below to play again!");
			}, 1000);
		}

		// winner!
		if (
			dummy.length > 0 &&
			dummy.every((letter) => letter.correctlyGuessed === true)
		) {
			setDisablePageClick(true);
			setTimeout(() => {
				alert("Congrats! You won! Click the button below to play again.");
			}, 1000);
		}
	}, [chances, dummy]);

	const generateRandomWord = () => {
		let dummyDataKeys = Object.keys(dummyData).sort(() =>
			Math.floor(Math.random() - 0.5)
		);

		let chosenKey = dummyDataKeys[0];
		setChosenCategory(chosenKey);

		for (let key in dummyData) {
			if (key === chosenKey) {
				let dummyDataValues = dummyData[key].sort(() =>
					Math.floor(Math.random() - 0.5)
				);

				let chosenValue = dummyDataValues[0].split("");
				setChosenWordArr(chosenValue);

				chosenValue.map((char) =>
					char === " "
						? setDummy((prevChars) => [
								...prevChars,
								{ letter: char, correctlyGuessed: true },
						  ])
						: setDummy((prevChars) => [
								...prevChars,
								{ letter: char, correctlyGuessed: false },
						  ])
				);
			}
		}
	};

	const handleLetterGuess = (guessedLetter) => {
		// setting correctly guessed letters to state
		let copyDummy = [...dummy];

		copyDummy.map((char) =>
			guessedLetter === char.letter ? (char.correctlyGuessed = true) : null
		);

		setDummy(copyDummy);

		// incorrect guess/decrease chances
		let isIncorrectGuess = !chosenWordArr.includes(guessedLetter);

		if (isIncorrectGuess) {
			setChances(chances - 1);
			setIncorrectGuesses((prevGuesses) => [...prevGuesses, guessedLetter]);
		}
	};

	const handlePlayAgain = () => {
		setDummy([]);
		setIncorrectGuesses([]);
		setChances(10);

		generateRandomWord();
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
					The category is {`${chosenCategory}`}
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
