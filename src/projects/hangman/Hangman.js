import React from "react";
import "./hangman.css";

const dummyStr = ["e", "i", "n", "s", "t", "e", "i", "n"];

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
	return (
		<div>
			<div>Hangman</div>
			<div className="hangman-alphabet">
				{alphabet.map((letter) => (
					<button key={letter} className="hangman-letter">
						{letter}
					</button>
				))}
			</div>
			<div className="hangman-category">The category is famous scientists</div>
			<div className="hangman-underscores">
				{dummyStr.map((char, i) => (
					<div key={i} className="hangman-underscore">
						____
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
