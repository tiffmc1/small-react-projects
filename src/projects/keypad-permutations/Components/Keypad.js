import "../stylesheets/keypad.css";

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
