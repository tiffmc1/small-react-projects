import "../stylesheets/keypad.css";

/* user process:
- user clicks on key
- if a user clicks on that key then those 

*/

const keys = {
	2: "abc",
	3: "def",
	4: "ghi",
	5: "jkl",
	6: "mno",
	7: "pqrs",
	8: "tuv",
	9: "wxyz",
};

const Keypad = () => {
	return (
		<>
			<div className="keypad-container">
				<div className="keypad-wrapper">
					<div className="keys-container">
						<button className="key">1</button>
						<button className="key">2</button>
						<button className="key">3</button>
						<button className="key">4</button>
						<button className="key">5</button>
						<button className="key">6</button>
						<button className="key">7</button>
						<button className="key">8</button>
						<button className="key">9</button>
						<button className="key">0</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default Keypad;
