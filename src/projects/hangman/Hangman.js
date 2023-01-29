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

	const handleLetterGuess = (guessedLetter) => {
		let copyDummy = [...dummy];

		for (let char in copyDummy) {
			let letter = copyDummy[char];

			if (guessedLetter === letter.letter) {
				letter.correctlyGuessed = true;
				setDummy(copyDummy);
			}
		}
	};

	return (
		<div>
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
			<div className="hangman-category">The category is famous scientists</div>
			<div className="hangman-underscores">
				{dummy.map((char, i) => (
					<div key={i} className="hangman-underscore">
						{char.correctlyGuessed ? char.letter : "_____"}
					</div>
				))}
			</div>
			<img
				src={require("./images/hangman-10.png")}
				alt=""
				height={350}
				width={250}
			/>
		</div>
	);
};

export default Hangman;
