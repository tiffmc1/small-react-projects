import "../hangman.css";
import { underscore } from "../data";

const ChosenWordLetters = ({ chosenWordLetters }) => {
	return (
		<div className="hangman-underscores">
			{chosenWordLetters.map((char, i) => (
				<div key={i} className="hangman-underscore">
					{char.correctlyGuessed ? char.letter : underscore}
				</div>
			))}
		</div>
	);
};

export default ChosenWordLetters;
