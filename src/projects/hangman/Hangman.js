import React from "react";
// import hangman from "src/projects/hangman/images/hangman-1.png";

const Hangman = () => {
	return (
		<div>
			<div>Hangman</div>
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
